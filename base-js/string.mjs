let str1 = new String("111");
let str2 = new String("222");
let p = console.log;
console.log(str1 == str2); // false, they are two objects
console.log(typeof str1);

let str3 = "111";
let str4 = "111";

console.log(str3 === str4);
console.log(typeof str3);

console.log(str1 == str3);  // true, type conversion
console.log("===============");

let str5 = "I have a dog";

p(str5.match(/have/)); // [ 'have', index: 2, input: 'I have a dog' ]  (an array-like object)
p(str5.match(/aha/)); 
p(str5.match(/have/).length); // [ 'have', index: 2, input: 'I have a dog' ]
p(str5.search(/have/)); // 2
p(str5.search(/aha/)); // -1

p("=================");
p(str5.substr(3,5)) // start,length of result
p(str5.substring(3,5)) // start,end




