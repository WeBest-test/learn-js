function Animal() {
  this.cate = "Animal";
  this.name = "";
}

Animal.prototype.tag = "tag";

function Dog() {
  this.name = "Dog"
}

let animalInstance = new Animal();
console.log(Animal.prototype.constructor == animalInstance.constructor) // true

Dog.prototype = animalInstance;
console.log(animalInstance.constructor == Animal) //  true

console.log(Dog.prototype.constructor == Animal) // true
console.log(Animal.prototype.constructor == Animal) // true
// Dog.prototype.constructor = Dog;   //   VI

console.log("===")
let a = new Dog();
console.log(a.cate) // Animal
console.log(a.name) // Dog
console.log(a.constructor === Animal) // true

console.log(a.constructor === Dog) // false  VI

console.log("===")
console.log(a instanceof Dog) // true
console.log(a instanceof Animal) // true
console.log(a instanceof Object) // true

console.log("===")
console.log(a.__proto__ == Animal.prototype) // false   VI
console.log(a.__proto__ == Dog.prototype) // true
console.log(Object.getPrototypeOf(a) == Dog.prototype) //true
console.log(Dog.prototype.isPrototypeOf(a)) //true
console.log(Animal.prototype.isPrototypeOf(a)) //true   VI
console.log(Function.prototype.isPrototypeOf(a)) //false
console.log(Object.prototype.isPrototypeOf(a)) //true   VI  用于检测是否在原型链上。

console.log("===")
console.log(Animal.prototype.__proto__ == Object.prototype) // true
console.log(Dog.prototype.__proto__ == Animal.prototype) // true

console.log("===")
console.log(a.hasOwnProperty("tag")) // false
console.log("tag" in a) // true