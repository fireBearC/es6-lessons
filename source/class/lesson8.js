{
    //简介表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o: o,
        k: k
    };

    let es6 = {
        o,
        k
    }

    let es5_method = {
        hello: function () {
            console.log("es5 hello")
        }
    }

    let es6_method = {
        hello () {
            console.log('es6 hello')
        }
    }

    es5_method.hello();
    es6_method.hello();
}

{
    //属性名表达式
    let a = 'b';
    let es5_obj = {
        a: 'c',
        b: 'c'
    }
    let es6_obj = {
        [a]: 'c'
    }
    console.log(es5_obj, es6_obj);
}

{
    //新增API
    console.log('字符串判断', Object.is('abc', 'abc'), 'abc' === 'abc');
    console.log('数组：', Object.is([], []), [] === []);
}

{
    //扩展运算符  现在不被浏览器支持
    // let {a, b, ...c} = {a: 'test', b: 'hello', c: 'world', d: 'amy'}
    // console.log(c);
}
