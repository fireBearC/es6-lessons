// es5
// var fn = function(a, b) {
//     return a + b;
// }

// es6 箭头函数写法，当函数直接被return时，可以省略函数体的括号
const fn = (a, b) => a + b;

console.log(fn(1, 2))
// es5
// var foo = function() {
//     var a = 20
//     var b = 30
//     return a + b
// }

// es6
const foo = () => {
    const a = 20;
    const b = 30;
    return a + b;
}

console.log(foo())
