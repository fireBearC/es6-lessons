{
    let a, b, rest
    [a, b] = [1, 2]
    console.log(a, b)
}

{
    let a, b, rest
    [a, b, ...rest] = [1,2,3,4,5,6]
    console.log(a, b, rest)
}

{
    let a
    let b
    ({a, b} = {a: 1, b: 2})
    console.log(a, b)
}

{
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b);
}

{
    let a, b;
    function f(){
        return [1,2]
    }
    [a,b] = f();
    console.log(a, b)
}

{
    let a, b;
    function f() {
        return [1,2,3,4,5]
    }
    [,a,,b] = f();
    console.log(a, b)
}

{
    let a, b;
    function f() {
        return [1,2,3,4,5]
    }
    [,a,,...b] = f();
    console.log(a, b)
}

{
    let o = {p:42, q:true};
    let {p,q} = o;
    console.log(p, q)
}

{
    let mateData = {
        atitle: 'abc',
        test: [{
            btitle: 'test',
            desc: 'description'
        }]
    }

    let {atitle, test:[{btitle}]} = mateData;
    console.log(atitle, btitle)
}
