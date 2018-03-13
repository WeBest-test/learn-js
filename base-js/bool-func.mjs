let p = console.log;
p(typeof true)

p( true && (()=>console.log(666))() )


if(true && function(){}){
  p("1111")
}

p(true && function(){})

p(11 && 22 && 33) // 33
p(function(){console.log(222)}) // 是一个函数
p(function(){console.log(999)}()) // 是一个函数执行后的返回值 undefined

p("==========")
p(Number(null) === 0 )

p("================")
p(Boolean(""))  
if(""){ // 其实为Boolean函数转换
  p("1")
}

p("=======")
p(0 == "")   // 相等的转换和Boolean转换规则不同。
p(0 == "0") // 字符串与数值判断相等，先把字符串转换为数值

p("===")
p(false == "0") // 布尔值与字符串判断相等，各自转换为数值后再比较。
p(Boolean("0")) // true