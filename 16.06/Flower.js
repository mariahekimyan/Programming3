class Flower extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index)
        this.multiply = 0;
    }
    
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 8 && newCell) {
            var newFlower = new Flower(newCell[0], newCell[1], this.index);
            flowerArr.push(newFlower);
            matrix[newCell[1]][newCell[0]] = 4;
            this.multiply = 0;
        }
    }
}

