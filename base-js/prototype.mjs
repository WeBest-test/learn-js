function Animal() {
  this.cate = "Animal";
  this.name = "";
}

function Dog() {
  this.name = "Dog"
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;  // Very Important


let a = new Dog();
console.log(a.cate)
console.log(a.name)
console.log(a.constructor)
console.log(a instanceof Dog)
console.log(a instanceof Animal)