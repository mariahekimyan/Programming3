class Fire {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 1;
        this.index = index;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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

