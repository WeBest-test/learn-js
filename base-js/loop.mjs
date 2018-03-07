let o = {a:111, b:222};
let p = console.log;

for (let prop in o) {
  p(prop)
}
p("======")

let arr = [1,2,3];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (var prop of arr) { // for ... of 适用于实现了iterable的对象，如数组
  p(prop)
}

// 尽量使用let
p(prop)