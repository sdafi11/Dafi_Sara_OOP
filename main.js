class Animal {
    constructor (name) {
        this.name = name;
    }

    makeSound(){
        console.log("Generic Animal Sound!");
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);

    }

    makeSound() {
        console.log("Meow! Meow!");
    }

}

const animal1 = new Animal("Max");
const animal2 = new Cat("Lucy");

animal1.makeSound();
animal2.makeSound();