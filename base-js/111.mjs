let p = console.log;

p(typeof 111)
p(typeof "111")
p(typeof true)
p(typeof null)   // object
p(typeof undefined) // undefined
p(typeof {a:111})
p(typeof []) // object
p(typeof (()=>{})) // object

// bool number string null undefined  symbol
// object(array function)