function f1() {　　　　 
  var n = 100;
  
  function add() {
    console.log(++n);　　　　 
  }　　　　 
  return add;
  
}　　
var r1 = f1();　　
r1(); // 
　　

r1(); // 



let r = (function () {
  var n = 1;
  function add(){
    n = n+1;
    console.log(n)
  }
  
  return add;
  
})();

r()
r()



function f2() {　　　　 
  var n = 500;
  
  function add() {
    console.log(++n);　　　　 
  }　　　　 
  return add;
  
}　　
var r2 = f2();　　
r2(); // 999
　　

r2(); // 1000
