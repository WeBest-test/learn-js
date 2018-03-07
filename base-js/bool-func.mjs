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