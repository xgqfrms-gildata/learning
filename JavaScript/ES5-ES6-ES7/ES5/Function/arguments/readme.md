# arguments



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments



arguments 是一个类似数组的对象, 对应于传递给函数的参数。




## 获取未知函数函数的参数信息 ？


function test(a,b,c,d,e,f){
    //
}

.toString 
// 获取函数的参数

test.toString();
//"function test(a,b,c,d,e,f){
    //
}"

.length
// 获取函数的参数个数
test.length;
//6

.name
// 获取函数的参数名称

???














## arguments.callee



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee


arguments.callee 属性包含当前正在执行的函数。。

callee 是 arguments 对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数。这在函数的名称是未知时很有用，例如在没有名称的函数表达式 (也称为“匿名函数”)内。

警告：
在严格模式下，第5版 ECMAScript (ES5) 禁止使用 arguments.callee()。
当一个函数必须调用自身的时候, 避免使用 arguments.callee(), 通过要么给函数表达式一个名字，，要么使用一个函数声明.



## Javascrpt 高级程序设计(第3版).pdf

> 22.3 高级定时器 613  

setTimeout(function(){
    //取出下一个条目并处理
    var item = array.shift();
    process(item);
    //若还有条目，再设置另一个定时器
    if(array.length > 0){
        setTimeout(arguments.callee, 100);
    }
}, 100);






http://stackoverflow.com/questions/8361642/arguments-callee-is-deprecated-what-should-be-used-instead

http://javascript.info/tutorial/arguments#arguments-callee

http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/


http://stackoverflow.com/questions/103598/why-was-the-arguments-callee-caller-property-deprecated-in-javascript




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments















