{
    console.log('a', '\u0061');
    console.log("b", '\u20BB7');
    console.log("b2:", '\u{20BB7}');

}

{
    let s = '𠮷';
    let s2 = 'a'
    console.log('length:', s2.length);
}

{
    let str = '\u{20bb7}abc';
    for (let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);
    }
    for (let code of str) {
        console.log(code);
    }
}

{
    let str = 'string';
    console.log('indclude:', str.includes('r'));
    console.log('start:', str.startsWith('str'));
    console.log('end:', str.endsWith('ng'));
}

{
    let str = 'abc'
    console.log(str.repeat(3))
}

{
    let name = 'list'
    let info = 'hello world'
    let str = `I am ${name}, ${info}`;
    console.log(str)
}

{
    console.log('1'.padStart(2, '0'))
    console.log('2'.padEnd(2, '0'))
}

