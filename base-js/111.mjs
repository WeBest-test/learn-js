let p = console.log;

p(typeof true) //boolean
p(typeof 111) // number
p(typeof "111") //string
p(typeof null)   // null是一种基本数据类型，但typeof运算结果为object
p(typeof undefined) // undefined

p(typeof {a:111})
p(typeof []) // object  数组是一种object
p(typeof (()=>{})) // object

// bool number string null undefined  symbol
// object(array function)

