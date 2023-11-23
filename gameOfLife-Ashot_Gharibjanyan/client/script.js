let socket = io();

let side = 25


let grassColor = "green"
let grassEaterColor = "yellow"
let predatorColor = "red"
let waterColor = "blue"
let tixmColor = "black"
let arevColor = "orange"
let dzunColor = "white"



function setup() {
    frameRate(30)
    createCanvas(20 * side, 20 * side);
    background("#acacac");
}


function drawGame(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            let toBot = side - side * 0.3
            textSize(toBot);
            if (matrix[y][x] == 1) {
                fill(grassColor)
                rect(x * side, y * side, side, side);
                text('🌿', x * side, y * side + toBot);

            
            } else if (matrix[y][x] == 2) {
                fill(grassEaterColor)
                rect(x * side, y * side, side, side);
                text('🤩', x * side, y * side + toBot);

            } else if (matrix[y][x] == 3) {
                fill(predatorColor)
                rect(x * side, y * side, side, side);
                text('🐮', x * side, y * side + toBot);
            } else if (matrix[y][x] == 4) {
                fill(waterColor)
                rect(x * side, y * side, side, side);
                text('💧', x * side, y * side + toBot);
            } else if (matrix[y][x] == 5) {
                fill(tixmColor)
                rect(x * side, y * side, side, side);
                text('🐜', x * side, y * side + toBot);
            } else if (matrix[y][x] == 6) {
                fill(arevColor)
                rect(x * side, y * side, side, side);
                text('☀️', x * side, y * side + toBot);

            }else if (matrix[y][x] == 7) {
                fill(dzunColor)
                rect(x * side, y * side, side, side);
                text('❄️', x * side, y * side + toBot);

            }else {
                fill("gray")
                rect(x * side, y * side, side, side)
            }
             




        }

        
    }
}

setInterval(
    function () {
    socket.on('send matrix', drawGame)
    },1000
)
let buttonSp = document.getElementById("SpElement");
buttonSp.addEventListener("click", handlerSpringClick)

function handlerSpringClick(){
    grassColor = "#207C10"
    grassEaterColor = "orange"
    predatorColor = "pink"
    waterColor = "00FEF3"
    tixmColor = "grey"
    arevColor = "yellow"
    dzunColor = "black"

    // socket.emit("Spring")
}

let buttonSm = document.getElementById("SmElement");
buttonSp.addEventListener("click", handlerSummerClick)

function handlerSummerClick(){
    grassColor = "green"
    grassEaterColor = "orange"
    predatorColor = "FF0000"
    waterColor = "5188E1"
    tixmColor = "595B5B"
    arevColor = "orange"
    dzunColor = "grey"
}


let buttonAu = document.getElementById("AuElement");
buttonSp.addEventListener("click", handlerAutumnClick)

function handlerAutumnClick(){
    grassColor = "orange"
    grassEaterColor = "orange"
    predatorColor = "orange"
    waterColor = "blue"
    tixmColor = "orange"
    arevColor = "yellow"
    dzunColor = "white"
}

let buttonWn = document.getElementById("WnElement");
buttonSp.addEventListener("click", handlerWinterClick)

function handlerWinterClick(){
    grassColor = "whitr"
    grassEaterColor = "white"
    predatorColor = "white"
    waterColor = "white"
    tixmColor = "white"
    arevColor = "orange"
    dzunColor = "white"
}
