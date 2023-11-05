class Water {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 50
        this.directions = []
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

    chooseCell(char, char1) {
        this.getNewCoordinates();
        let found = [];

        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }


        }
        return found;
    }


    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)
      
        if (newCell ) {
            let newX = newCell[0];
            let newY = newCell[1];

            let water = new Water(newX, newY);
            matrix[newY][newX] = 4;
            waterArr.push(water);

            this.energy = 10;
        }
    }


    eat() {

        let emptyCell = this.chooseCell(2,3);
        let newCell = random(emptyCell)
        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }





            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

                this.mul()
        }
        else{
            this.move()
        }



    }

    move() {

        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 4;
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
        for (let i = 0; i < waterArr.length; i++) {
            if (waterArr[i].x == this.x && waterArr[i].y == this.y) {
                waterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}