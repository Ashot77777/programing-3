let LivingCreature = require('./livingCreature')

module.exports = class Arev extends LivingCreature {
    constructor(x, y) {
      
        super(x, y)
        this.energy = 10
       
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
        this.multiply++;
        if (this.multiply >= 3) {
            let emptyCells = super.chooseCell(0)
          
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
            
            if (this.multiply >= 5 && newCell) {
                let x = newCell[0]
                let y = newCell[1]
                let ar = new   Arev(x, y, 6)
             arevArr.push(ar)
                this.multiply = 0;
            }
        }
    }


    eat() {
        var grassCells = super.chooseCell(1);
        var newCell = grassCells[Math.floor(Math.random() * grassCells.length)]
    
        if (newCell) {
    
            var newX = newCell[0];
            var newY = newCell[1];
    
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
    
            this.x = newX;
            this.y = newY;
            this.energy++;
    
            if (this.energy >= 10) {
                console.log(this.energy);
                this.mul();
            }
    
        }
        else {
            this.move();
        }
    }

    move() {
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
    
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


        for (let i = 0; i < arevArr.length; i++) {
            if (arevArr[i].x == this.x && arevArr[i].y == this.y) {
              arevArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }

}