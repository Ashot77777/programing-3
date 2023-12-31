module.exports = class LivingCreature {
        constructor(x, y) {
                this.x = x;
                this.y = y;
                this.multiply = 0
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
                let found = []

                for (let i in this.directions) {
                        var x = this.directions[i][0]
                        var y = this.directions[i][1]
                        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                                if (matrix[y][x] == char || matrix[y][x] == char1 || matrix[y][x] == char2 || matrix[y][x] == char3 || matrix[y][x] == char4) {
                                        found.push(this.directions[i])
                                }
                        }
                }
                


                return found
        }
}
