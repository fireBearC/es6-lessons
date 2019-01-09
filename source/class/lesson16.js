{
    let readonly = function (target, name, descriptor) {
        descriptor.writable = false
        return descriptor
    }

    class Test{
        @readonly
        time () {
            return '2017-08-03'
        }
    }


    let test = new Test()
    // test.time = function () {
    //     return 'xxxx-xx-xx'
    // }
    console.log('info:', test.time())
}

{
    let typename = function (target, name , descriptor) {
        target.myname = 'Amy'
    }

    @typename
    class Test {

    }

    console.log('info:', Test.myname)
}


{
    function add(a,b)
    {
        console.log(a+b);
    }
    function sub(a,b)
    {
        console.log(a-b);
    }

    add.call(sub,1,1);
}

{
    var a = 20;

    function test() {
        var b = a + 10;

        function innerTest() {
            var c = 10;
            return b + c;
        }

        return innerTest();
    }

    test();

}

{
    B
}
