{
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);
    let regex3 = new RegExp(/xyz/ig, 'i');
    // console.log(regex.test('xyz123'), regex2.test('xyz123'));
    console.log(regex3.flags);
}

{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;
    console.log('one', a1.exec(s), a2.exec(s));
    console.log("a1:lastindex:"+a1.lastIndex);
    console.log("a2:lastindex:"+a1.lastIndex)
    console.log('two', a1.exec(s), a2.exec(s));

    console.log(a1.sticky, a2.sticky);
}
