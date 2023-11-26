let LivingCreature = require('./livingCreature')

module.exports = class Predator extends LivingCreature {
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
                let pr = new   Predator(x, y, 3)
              predatorArr.push(pr)
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
    
            if (this.energy >= 12) {
                
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
        for (let i = 0; i < predatorArr.length; i++) {
            if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                predatorArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}
