var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");

// let alert = console.log

div1.addEventListener("click",()=>alert("div1"),false);
div3.addEventListener("click",()=>alert("div3-false"),false);
div3.addEventListener("click",()=>alert("div3-true"),true);
div4.addEventListener("click",()=>alert("div4"),true);
div2.addEventListener("click",()=>alert("div2-false-1"),false);
div2.addEventListener("click",()=>alert("div2-false-2"),false);
div2.addEventListener("click",()=>alert("div2-true-1"),true);
div2.addEventListener("click",()=>alert("div2-true-2"),true);



/**


由外层元素的捕获到内层元素的捕获->点击到的元素(代码顺序，无论capture真假)->由内层元素的冒泡到外层元素的冒泡
同层元素有多个事件，按代码顺序
*/


/*
点击div2:

div2-false-1
div2-false-2
div2-true-1
div2-true-2
div1

*/

/*
点击div3:

div2-true-1
div2-true-2
div3-false
div3-true
div2-false-1
div2-false-2
div1

*/

/*
点击div4:

div2-true-1
div2-true-2
div3-true
div4
div3-false
div2-false-1
div2-false-2
div1

*/
