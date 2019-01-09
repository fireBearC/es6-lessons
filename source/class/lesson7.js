{
    function test(x, y = 'world', c = 'Amy') {
        console.log('info:', x, y, c)
    }
    test('hello', 'Amy');
}

{
    let x = 'test'
    function test2(c, y = x) {
        console.log('作用域', c, y)
    }
    test2('hello')
}

{
    function test3(...arg) {
        for (let v of arg) {
            console.log('test:', v);
        }
    }
    test3(1,2,3,4,5);
}

{
    console.log(...[1,2,3,4])
}

{
    let arrow = v => v*2;
    let arrow2 = () => 5;
    console.log(arrow(3));
    console.log(arrow2());
}

{  // 建议在递归调用这种类型时候使用，因为单纯的递归会花费太多的性能，而尾调用就可以解决这个问题
    function tail(x) {
        console.log('tail', x);
    }
    function fx(x) {
        return tail(x);
    }
    tail(123);
}
