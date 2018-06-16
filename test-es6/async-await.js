/* https://segmentfault.com/a/1190000011526612 */

// async用来表示函数是异步的，定义的函数会返回一个promise对象，可以使用then方法添加回调函数。  
// 若 async 定义的函数有返回值，return 123; 相当于Promise.resolve(123),
// 没有声明式的return则相当于执行了Promise.resolve();
async function demo01() {
    return 123;
}
demo01().then(val => {
    console.log(val);// 123
});

async function demo02() {
    console.log(999)
}
demo02().then(val => {
    console.log(val);// undefined
});


// await 可以理解为是 async wait 的简写。await 必须出现在 async 函数内部，不能单独使用。
// await 后面可以跟任何的JS 表达式。
// 虽然说 await 可以等很多类型的东西，但是它最主要的意图是用来等待 Promise 对象的状态被 resolved。
// 如果await的是 promise对象会造成异步函数停止执行并且等待 promise 的解决,如果等的是正常的表达式则立即执行。
function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' enough sleep~');
        }, second);
    })
}
function normalFunc() {
    console.log('normalFunc');
}
async function awaitDemo() {
  // try {
    await normalFunc(); 
    console.log('something, ~~');
    let result = await sleep(2000);
    console.log(result);// 两秒之后会被打印出来
  // }catch(e){
    // console.log(e)
  // }
}
awaitDemo();
