let LivingCreature = require('./livingCreature')


module.exports = class Grass extends LivingCreature {

    mul() {
        this.multiply++
        var emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (this.multiply >= 8 && newCell) {
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = 1

            var gr = new Grass(newX, newY)
            grassArr.push(gr)
            this.multiply = 0
        }

    }
}