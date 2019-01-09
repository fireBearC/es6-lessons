{
    //独一无二的属性名声明方式
    let a1 = Symbol();
    let a2 = Symbol();
    console.log('a1 === a2:',a1 === a2);

    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log('a3 === a3:',a3 === a4);
}

{
    let a1 = Symbol.for('abc')
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c': 456
    };
    console.log('obj', obj)

    //note: 用Symbol声明的属性名是无法用entry来遍历的
    for (let [key, value] of Object.entries(obj) ) {
        console.log('let item: ', key, value);
    }

    //这种只能取到symbol属性的key-value，无法取到其他属性
    Object.getOwnPropertySymbols(obj).forEach(function(item) {
        console.log(obj[item])
    })

    // 这种方法可以拟补以上方法的缺点
    Reflect.ownKeys(obj).forEach(function(item) {
        console.log('own:', item, obj[item]);
    })
}
