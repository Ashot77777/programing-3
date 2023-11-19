let LivingCreature = require('./livingCreature')

module.exports = class Tixm extends LivingCreature {
    constructor(x, y) {
        // this.x = x
        //this.y = y
        super(x, y)
        this.energy = 12
        //this.directions = []
    }


    getNewCoordinates() {   
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
    ];
    }
    chooseCell(char) {
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
        this.multiply++;
        if (this.multiply >= 3) {
            let emptyCells = super.chooseCell(0)
          
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
            
            if (this.multiply >= 5 && newCell) {
                let x = newCell[0]
                let y = newCell[1]
                let tx = new Tixm(x, y, 5)
             tixmArr.push(tx)
                this.multiply = 0;
            }
        }
    }


    eat() {
        let grassCells = super.chooseCell(1);
        let newCell = grassCells[Math.floor(Math.random() * grassCells.length)]
    
        if (newCell) {
    
            let newX = newCell[0];
            let newY = newCell[1];
    
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
    
            this.x = newX;
            this.y = newY;
            this.energy++;
    
            if (this.energy >= 12) {
                console.log(this.energy);
                this.mul();
            }
    
        }
        else {
            this.move();
        }
    }

    move() {
        let emptyCells = super.chooseCell(0);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
    
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
    
            this.x = newX;
            this.y = newY
        }
    
        this.energy--;
        if (this.energy <= 0) {
            this.die();
        }
    }


    die() {


        for (let i = 0; i < tixmArr.length; i++) {
            if (tixmArr[i].x == this.x && tixmArr[i].y == this.y) {
                tixmArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }

}