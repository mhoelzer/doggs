// function Dog (name, breed, isGoodBoy) {
//     this.name = name;
//     this.breed = breed;
//     this.isGoodBoy = isGoodBoy;
// }
// Dog.prototype = {
//     constructor: Dog,
//     sit: function () {
//         return `${this.name} sits like a good puppy`
//     }
// }

// function GuardDog (name, breed, isGoodBoy, attackWord) {
//     Dog.call(this, name, breed, isGoodBoy);
//     this.attackWord = attackWord;
// }
// GuardDog.prototype = Object.create(Dog.prototype);
// GuardDog.prototype.constructor = GuardDog;
// GuardDog.prototype.bark = function () {
//     return `${this.name} goes woof`
// }

class Dog {
    constructor(name, breed, isGoodBoy) {
        this.name = name;
        this.breed = breed;
        this.isGoodBoy = isGoodBoy;
    }
    sit() {
        return `${this.name} sits like a good puppy`;
    }
}

class GuardDog extends Dog {
    constructor(name, breed, isGoodBoy, attackWord) {
        super(name, breed, isGoodBoy);
        this.attackWord = attackWord;
    }
    bark() {
        return `${this.name} goes woof`;
    }
}

let benji = new Dog("Benji", "gd/ld", true);
console.log(benji);
console.log(benji.sit());

let toby = new GuardDog("Toby", "gd", true, "big bunny");
console.log(toby);
console.log(toby.bark());
