class Animal extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 30;
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

    eat() {
        let foods = this.chooseCell(4)
        let food = random(foods)
        if (food) {
            this.energy = 0;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
            for (var i in flowerArr) {
                if (newX == flowerArr[i].x && newY == flowerArr[i].y) {
                    flowerArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy <= 0) {
                this.die()
            }
        }
        else {
            this.move()
        }

    }
    move() {
        this.energy--;
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in animalArr) {
            if (this.x == animalArr[i].x && this.y == animalArr[i].y) {
                animalArr.splice(i, 1);
                break;
            }
        }
    }
}

