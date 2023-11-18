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


let matrix = matrixGenerator(20, 25, 30, 35, 40, 45, 50, 55, 60)
let side = 25


let grassArr = []
let grassEaterArr = []
let predatorArr = []
let waterArr = []
let tixmArr = []
let arevArr = []
let dzunArr = []


function setup() {

    frameRate(10)
    createCanvas(matrix[0].length * side, matrix.length * side)

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                let water = new Water(x, y)
                waterArr.push(water)
            } else if (matrix[y][x] == 5) {
                let tixm = new Tixm(x, y)
                tixmArr.push(tixm)
            } else if (matrix[y][x] == 6) {
                let arev = new Arev(x, y)
                arevArr.push(arev)
            }else if (matrix[y][x] == 7) {
                let dzun = new Dzun(x, y)
               dzunArr.push(dzun)
            }
        }

    }

}



function draw() {

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

        for (let i in grassArr) {
            grassArr[i].mul()
        }

        for (let i in grassEaterArr) {
            grassEaterArr[i].eat()

        }

        for (let i in predatorArr) {
            predatorArr[i].eat()
        }

        for (let i in waterArr) {
            waterArr[i].eat()
        }
        for (let i in tixmArr) {
            tixmArr[i].eat()


        }
        for (let i in arevArr) {
            arevArr[i].eat()
        }
        for (let i in dzunArr) {
            dzunArr[i].eat()
        }
        
    }
}

// let student = {
//     name:"Ashot",
//     age:15,
//     isTumoStudent:true,

//     showInfo(){

//         console.log(this.name,this.age)
//     }
// }
// student.showInfo()

//et erexa = new Child("Ashot", 15, "male");
// erexa.jump()

// erexa.speak()

// erexa.walk()

// console.log(erexa.name, erexa.gen);