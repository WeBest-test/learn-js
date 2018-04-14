function Animal() {
  this.cate = "Animal";
  this.name = "";
}

function Dog() {
  this.name = "Dog"
}

Dog.prototype = new Animal();
console.log(Dog.prototype.constructor)
//Dog.prototype.constructor = Dog;  

console.log("===")
let a = new Dog();
console.log(a.cate)
console.log(a.name)
console.log(a.constructor)

console.log("===")
console.log(a instanceof Dog)
console.log(a instanceof Animal)
console.log(a instanceof Object)

console.log("===")
console.log(a.__proto__ == Animal.prototype)
console.log(a.__proto__ == Dog.prototype)

console.log("===")
console.log(Animal.prototype.__proto__)
console.log(Dog.prototype.__proto__)
console.log(Animal.prototype.__proto__ == Object.prototype)
console.log(Dog.prototype.__proto__ == Animal.prototype)