let LivingCreature = require('./livingCreature')

module.exports = class Tixm extends LivingCreature {
    constructor(x, y) {
   
        super(x, y)
        this.energy = 12
        
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