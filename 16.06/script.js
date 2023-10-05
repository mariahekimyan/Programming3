// let firstName = "Karen"
// let lastName = "Aslanyan"
// let age = "96"
// let phoneNumber = "096548625"

// let person = {
//     firstName: "Karen",
//     lastName: "Aslanyan",
//     age: "96",
//     phoneNumber: "096548625", 

//     sayHello() {
//         console.log("Hello + person.firstName")
//     }
// }

// let person2 = {
//     firstName: "Ashot",
//     lastName: "Xachatryan",
//     age: "47",
//     phoneNumber: "096548965", 

//     sayHello() {
//         console.log("Hello + person.firstName")
//     }
// }

// class Person{
//     constructor(firstName,lastName,age,phoneNumber){
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.age = age,
//         this.phoneNumber = phoneNumber
//     }
// }

// let person1 = new Person()
// console.log(person1.lastName);
//let cat = new Cat(1,8,Մուռզիկ)
// console.log(cat1.move);

// class Cat {
//     constructor(x,y, name) {
//        this.x = x;
//        this.y = y;
//        this.name = name;
//        this.energy = 8;
//        this.hungry = true;
//        this.mouseCount = 0;
//     }
//     move() {
//         this.x++;
//         this.y++;
//     }

//     eat() {
//         this.mouseCount++
//         this.energy+=2

//         if(this.mouseCount = 3){
//             this.energy="false"     
//         } 
//     }
// }

var matrix = [];
var side = 40;
var n = 15;
var m = 18;

for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let j = 0; j < m; j++) {
        matrix[i].push(0)
    }
}
function characters(index, count) {
    for (let a = 0; a < count; a++) {
        var v = Math.floor(random(0, n))
        var w = Math.floor(random(0, m))
        matrix[v][w] = index;
    }
}

let grassArr = []
let grassEaterArr = []
let predatorArr = []
let flowerArr = []
let animalArr = []
let fireArr = []

function setup() {
    characters(1, 12)
    characters(2, 15)
    characters(3, 7)
    characters(4, 4) 
    characters(5, 15)
    characters(6,1)

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y, 1)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y, 2)
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] == 3) {
                let pre = new Predator(x, y, 3)
                predatorArr.push(pre)
            }
            else if (matrix[y][x] == 4) {
                let flower = new Flower(x, y, 4)
                flowerArr.push(flower)
            }
            else if (matrix[y][x] == 5) {
                let animal = new Animal(x, y, 5)
                animalArr.push(animal)
            }
            else if (matrix[y][x] == 6) {
                let fire = new Fire(x, y, 6)
                fireArr.push(fire)
            }
        }
    }



}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("pink");
            }
            else if (matrix[y][x] == 4) {
                fill("purple");
            }
            else if (matrix[y][x] == 5) {
                fill("brown");
            }
            else if (matrix[y][x] == 6) {
                fill("red");
            }
            
            rect(x * side, y * side, side, side);
        }
    }
    for (let i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (let i in predatorArr) {
        predatorArr[i].eat();
    }
    for (let i in flowerArr) {
        flowerArr[i].mul();
    }
    for (let i in animalArr) {
        animalArr[i].eat();
    }
    for (let i in fireArr) {
        fireArr[i].mul();
    }
}