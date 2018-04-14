function Animal() {
  this.cate = "Animal";
  this.name = "";
}

function Dog() {
  this.name = "Dog"
}

Dog.prototype = new Animal();
console.log(Dog.prototype.constructor == Animal) // true
//Dog.prototype.constructor = Dog;  

console.log("===")
let a = new Dog();
console.log(a.cate) // Animal
console.log(a.name) // Dog
console.log(a.constructor) // [Function: Animal]

console.log("===")
console.log(a instanceof Dog) // true
console.log(a instanceof Animal) // true
console.log(a instanceof Object) // true

console.log("===")
console.log(a.__proto__ == Animal.prototype) // false
console.log(a.__proto__ == Dog.prototype) // true

console.log("===")
console.log(Animal.prototype.__proto__ == Object.prototype) // true
console.log(Dog.prototype.__proto__ == Animal.prototype) // true