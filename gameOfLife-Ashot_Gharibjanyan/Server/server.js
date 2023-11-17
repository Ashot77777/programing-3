let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");
const Predator = require('./predator');

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

function matrixGenerator(matrixSize, grass, grassEater, predator, water, tixm) {
    var matrix = []
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }

    io.sockets.emit('send matrix', matrix)


    grassArr = [];
    grassEaterArr = [];
    predatorArr = [];
    waterArr = [];
    tixmArr = [];


    Grass = require("./grass")
    GrassEater = require("./grassEater")
    Predator = require("./predator")
    Water = require("./water")
    Tixm = require("./tixm")

    function createObject(matrix) {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    let gr = new Grass(x, y, 1);
                    grassArr.push(gr)
                }
                else if (matrix[y][x] == 2) {
                    let grEater = new GrassEater(x, y, 2);
                    grassEaterArr.push(grassEater)

                }
                else if (matrix[y][x] == 3) {
                    let predator = new Predator(x, y, 3);
                    predatorArr.push(predator)

                }
                else if (matrix[y][x] == 4) {
                    let water = new Water(x, y, 4);
                    waterArr.push(water)

                }
                else if (matrix[y][x] == 5) {
                    let tixm = new Tixm(x, y, 5);
                    tixmArr.push(tixm)

                }
            }
        }

        io.sockets.emit('send matrix', matrix)


    }


    function game() {
        for (let i in grassArr) {
            grassArr[i].mul()
        }
        for (let i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
        for (let i in predatorArr) {
            predatorArr[i].eat();
        }
        for (let i in waterArr) {
            waterArr[i].eat();
        }
        for (let i in tixmArr) {
            tixmArr[i].eat();
        }

        io.sockets.emit("send matrix", matrix);
    }

    setInterval(game, 1000)



    io.on('connection', function () {
        createObject(matrix)
    })
}
