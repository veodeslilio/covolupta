// Define the parent class
class Animal {
  sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

// Define the child class
class Dog extends Animal {
  constructor() {
    super('Woof!');
  }

  makeSound() {
    super.makeSound();
    console.log('I am a dog!');
  }
}

// Create an instance of the child class
const dog = new Dog();
dog.makeSound();
