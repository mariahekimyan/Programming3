class Fire extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 1;
        this.directions = [];
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

    chooseCell(character) {
        this.getNewCoordinates();
       return super.chooseCell(character)
    }

    mul() {
        var newCell = random(this.chooseCell(1));
        if (newCell) {
            var newFire = new Fire(newCell[0], newCell[1], this.index);
            fireArr.push(newFire);
            matrix[newCell[1]][newCell[0]] = 6;
        }
    }

    eat() {
        let foods = this.chooseCell(1)
        let foods1 = this.chooseCell(4)
        let foods2 = foods.concat(foods1)
        let food = random(foods2)
        if (food) {
            this.energy++;
            matrix[food[1]][food[0]] = 6
            
            if(this.energy >= 12){
                this.mul()
            }
        }
        else {
            this.move()
        }
    }

    move() {
        let emptyCells = this.chooseCell(1)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 6
            this.x = newX
            this.y = newY
        }
    }
}

