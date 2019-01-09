{
    //闭包解释
    var fn = null;
    function foo() {
        var a = 2;
        function innnerFoo() {
            console.log(a);
        }
        fn = innnerFoo; // 将 innnerFoo的引用，赋值给全局变量中的fn
    }
    function bar() {
        fn(); // 此处的保留的innerFoo的引用
    }
    foo();
    bar(); // 2

}


{
    for (var i=1; i<=5; i++) {
        setTimeout( function timer() {
            var now = i;
            console.log(now);
        }, i*1000 );
    }
}

{
    A
}
