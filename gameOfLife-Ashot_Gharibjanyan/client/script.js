let socket = io();

let side = 25





function setup() {
    frameRate(20)
    createCanvas(20 * side, 20 * side);
    background("#acacac");
}


function drawGame(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            let toBot = side - side * 0.3
            textSize(toBot);
            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side);
                text('🌿', x * side, y * side + toBot);

            } else if (matrix[y][x] == 0) {
                fill("grey")
                rect(x * side, y * side, side, side);

            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side);
                text('🤩', x * side, y * side + toBot);

            } else if (matrix[y][x] == 3) {
                fill("red")
                rect(x * side, y * side, side, side);
                text('🐮', x * side, y * side + toBot);
            } else if (matrix[y][x] == 4) {
                fill("blue")
                rect(x * side, y * side, side, side);
                text('💧', x * side, y * side + toBot);
            } else if (matrix[y][x] == 5) {
                fill("black")
                rect(x * side, y * side, side, side);
                text('🐜', x * side, y * side + toBot);
            } else if (matrix[y][x] == 6) {
                fill("orange")
                rect(x * side, y * side, side, side);
                text('☀️', x * side, y * side + toBot);

            }else if (matrix[y][x] == 7) {
                fill("white")
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