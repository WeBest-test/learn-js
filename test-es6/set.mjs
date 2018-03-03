let arr = [1, 1, 2, 3, 4, 5, 5, 6];
let r = [...new Set(arr)];
console.log(r);


// WeakSet 的成员只能是对象，而不能是其他类型的值。
/*
其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，
也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，
不考虑该对象还存在于 WeakSet 之中。

ES6 规定 WeakSet 不可遍历。

这些特点同样适用于 WeakMap 结构。
*/

let ws = new WeakSet([ [1,2], [3,4] ]);
console.log(ws)

// add two same obj
const ws2 = new WeakSet();
const obj = {};
const foo = {};

ws2.add(process);
ws2.add(obj);

console.log(ws2.has(process)); // true
console.log(ws2.has(foo));    // false

ws2.delete(process);
ws2.has(process);    // false