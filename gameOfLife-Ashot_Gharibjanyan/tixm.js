class Tixm {
    constructor(x,y){
        this.x = x
        this.y = y
        this.energy = 12
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
chooseCell(char) {
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

    
    
}

return found;
}


mul() {
let emptyCell = this.chooseCell(0);
let newCell = random(emptyCell)

if (newCell && this.energy > 12) {
    let newX = newCell[0];
    let newY = newCell[1];
    
    matrix[newY][newX] = 5;
    let tixm = new Tixm(newX, newY);
    tixmArr.push(tixm);

    this.energy = 12;
}
}


eat() {
    let emptyCell = this.chooseCell(4);
    let newCell = random(emptyCell)
    if (newCell) {
        this.energy += 5;
        let newX = newCell[0];
        let newY = newCell[1];

        for (let i = 0; i < waterArr.length; i++) {
            if (waterArr[i].x == newX && waterArr[i].y == newY) {
                waterArr.splice(i, 1)
                break;
            }
        }

        
        matrix[newY][newX] = 5;
        matrix[this.y][this.x] = 0;

        this.x = newX;
        this.y = newY;

        if (this.energy > 12) {
            this.mul()
        }
    } 
    
    
    
    else {
        this.move()
    }
}


move() 
{
  
      let emptyCell = this.chooseCell(0);
      let newCell = random(emptyCell)

      if (newCell)
    {
         let newX = newCell[0];
         let newY = newCell[1];

         matrix[newY][newX] = 5;
          matrix[this.y][this.x] = 0;

   
       this.x = newX;
       this.y = newY;

       this.energy--

       if (this.energy < 0) 
        {
         this.die()
        }
   } 


 
 
}

die()
  {
   
   
      for (let i = 0; i < tixmArr.length; i++) {
    if (tixmArr[i].x == this.x && tixmArr[i].y == this.y) {
      tixmArr.splice(i, 1)
    }
}
matrix[this.y][this.x] = 0;
  }
  
}