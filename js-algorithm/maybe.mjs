import _ from 'lodash';
var Maybe = function (x){
  this.__value = x;
}

Maybe.of = function (x){
  return new Maybe(x);
}

Maybe.prototype.map = function (f){
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}

Maybe.prototype.isNothing = function (){
  return (this.__value === null || this.__value === undefined);
}

//试试看

var add = _.curry(_.add);

Maybe.of({name: "Stark"})
  .map(_.property("age"))
  .map(add(10));
//=> Maybe(null)

let r = Maybe.of({name: "Stark", age: 21})
  .map(_.property("age"))
  .map(add(10));
//=> Maybe(31)
console.log(r)
