let LivingCreature = require('./livingCreature')

module.exports = class Arev extends LivingCreature {
    constructor(x, y) {
        // this.x = x
        //this.y = y
        super(x, y)
        this.energy = 10
        //this.directions = []
    }


    // getNewCoordinates() {   
    // this.directions = [
    //     [this.x - 1, this.y - 1],
    //     [this.x, this.y - 1],
    //     [this.x + 1, this.y - 1],
    //     [this.x - 1, this.y],
    //     [this.x + 1, this.y],
    //     [this.x - 1, this.y + 1],
    //     [this.x, this.y + 1],
    //     [this.x + 1, this.y + 1]
    // ];
    // }
    chooseCell(char,char1,char2,char3,char4) {
        this.getNewCoordinates();
        return super.chooseCell(char)
    }
    // chooseCell(char) {
    // this.getNewCoordinates();
    // let found = [];

    // for (let i in this.directions) {
    //     let x = this.directions[i][0];
    //     let y = this.directions[i][1];

    //     if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
    //         if (matrix[y][x] == char) {
    //             found.push(this.directions[i]);
    //         }
    //     }



    // }

    // return found;
    // }


    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell && this.energy > 10) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 6;
            let arev = new Arev(newX, newY);
            arevArr.push(arevArr);

            this.energy = 10;
        }
    }


    eat() {
        let emptyCell = this.chooseCell(1, 2, 3, 4, 5, 7);
        let newCell = random(emptyCell)
        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < grassArr; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                   grassArr.splice(i, 1)
                    break;
                }
            }

            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                   grassEaterArr.splice(i, 1)
                    break;
                }
            }

            for (let i = 0; i <predatorArr.length; i++) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                  predatorArr.splice(i, 1)
                    break;
                }
            }

            for (let i = 0; i < waterArr.length; i++) {
                if (waterArr[i].x == newX && waterArr[i].y == newY) {
                    waterArr.splice(i, 1)
                    break;
                }
            }

            for (let i = 0; i < tixmArr.length; i++) {
                if (tixmArr[i].x == newX && tixmArr[i].y == newY) {
                    tixmArrr.splice(i, 1)
                    break;
                }
            }

            for (let i = 0; i < dzunArr.length; i++) {
                if (dzunArr[i].x == newX && dzunArr[i].y == newY) {
                    dzunArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energy > 10) {
                this.mul()
            }
        }



        else {
            this.move()
        }
    }


    move() {

        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }




    }

    die() {


        for (let i = 0; i < arevArr.length; i++) {
            if (arevArr[i].x == this.x && arevArr[i].y == this.y) {
              arevArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }

}