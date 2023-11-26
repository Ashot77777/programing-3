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
    frameRate(60)
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

            } else if (matrix[y][x] == 7) {
                fill(dzunColor)
                rect(x * side, y * side, side, side);
                text('❄️', x * side, y * side + toBot);

            } else {
                fill("gray")
                rect(x * side, y * side, side, side)
            }





        }


    }
}

setInterval(
    function () {
        socket.on('send matrix', drawGame)
    }, 1000
)
let buttonSp = document.getElementById("SpElement");
buttonSp.addEventListener("click", handlerSpringClick)

function handlerSpringClick() {

    grassColor = "green"
    grassEaterColor = "green"
    predatorColor = "green"
    waterColor = "green"
    tixmColor = "green"
    arevColor = "yellow"
    dzunColor = "green"


    socket.emit("Spring")
}

let buttonSm = document.getElementById("SmElement");
buttonSm.addEventListener("click", handlerSummerClick)

function handlerSummerClick() {

    grassColor = "red"
    grassEaterColor = "red"
    predatorColor = "red"
    waterColor = "red"
    tixmColor = "red"
    arevColor = "orange"
    dzunColor = "red"


    socket.emit("Summer")
}


let buttonAu = document.getElementById("AuElement");
buttonAu.addEventListener("click", handlerAutumnClick)

function handlerAutumnClick() {


    grassColor = "orange"
    grassEaterColor = "orange"
    predatorColor = "orange"
    waterColor = "orange"
    tixmColor = "orange"
    arevColor = "yellow"
    dzunColor = "orange"


    socket.emit("Autumn")
}

let buttonWn = document.getElementById("WnElement");
buttonWn.addEventListener("click", handlerWinterClick)

function handlerWinterClick() {
    grassColor = "whitr"
    grassEaterColor = "white"
    predatorColor = "white"
    waterColor = "white"
    tixmColor = "white"
    arevColor = "orange"
    dzunColor = "white"

    socket.emit("Winter")
}

let buttonVr = document.getElementById("VrElement");
buttonVr.addEventListener("click", handlerVirusClick)

function handlerVirusClick() {
    grassColor = "black"
    grassEaterColor = "black"
    predatorColor = "black"
    waterColor = "black"
    tixmColor = "black"
    arevColor = "black"
    dzunColor = "black"

    socket.emit("Virus")
}

let buttonLb = document.getElementById("LbElement");
buttonLb.addEventListener("click", handlerLightningBoltClick)

function handlerLightningBoltClick() {
  

    socket.emit("LightningBolt")
}
