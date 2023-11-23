const { SSL_OP_MSIE_SSLV2_RSA_PADDING } = require('constants');
let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");

app.use(express.static("../client"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

function matrixGenerator(matrixSize, grass, grassEater, predator, water, tixm, arev, dzun) {
    let matrix = []
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }
    for (let i = 0; i < grass; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
    
        matrix[y][x] = 1
    
    }
    
    for (let i = 0; i < grassEater; i++) {
    
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
    
        matrix[y][x] = 2
    
    }
    
    
    
    for (let i = 0; i < predator; i++) {
    
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
    
        matrix[y][x] = 3
    
    
    }
    for (let i = 0; i < water; i++) {
    
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
    
        matrix[y][x] = 4
    
    
    }
    
    for (let i = 0; i < tixm; i++) {
    
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
    
        matrix[y][x] = 5
    
    
    }
    
    for (let i = 0; i < arev; i++) {
    
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
    
        matrix[y][x] = 6
    
    
    }
    
    for (let i = 0; i < dzun; i++) {
    
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
    
        matrix[y][x] = 7
    
    
    }
    
    
    return matrix
    
    
    
}

   matrix = matrixGenerator(20, 20, 30, 50, 40, 50, 55, 35,)


    io.sockets.emit('send matrix', matrix)


    grassArr = [];
    grassEaterArr = [];
    predatorArr = [];
    waterArr = [];
    tixmArr = [];
    arevArr = [];
    dzunArr = [];


    Grass = require("./grass")
    GrassEater = require("./grassEater")
    Predator = require("./predator")
    Water = require("./water")
    Tixm = require("./tixm")
    Arev = require("./arev")
    Dzun = require("./dzun")

    function createObject(matrix) {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    let gr = new Grass(x, y, 1);
                    grassArr.push(gr)
                }
                else if (matrix[y][x] == 2) {
                    let grEater = new GrassEater(x, y, 2);
                    grassEaterArr.push(grEater)

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
                else if (matrix[y][x] == 6) {
                    let arev = new Arev(x, y, 6);
                    arevArr.push(arev)

                }
                else if (matrix[y][x] == 7) {
                    let dzun = new Dzun(x, y, 7);
                    dzunArr.push(dzun)

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
        for (let i in arevArr) {
            arevArr[i].eat();
        }
        for (let i in dzunArr) {
            dzunArr[i].eat();
        }

        io.sockets.emit("send matrix", matrix);
    }

    setInterval(game, 1000)



    // io.on('connection', function (socket) {
    //     createObject(matrix)
    //     socket.on("Spring", handleSpringClick)
    // })

