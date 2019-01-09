{
    let arr = Array.of(3,4,5,6,7)
    let arr2 = Array.of(3,4,5,6,'asd')
    console.log('arr', arr2)

    let empty = Array.of();
    console.log('empty:', empty)
}

{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function (item) {
        console.log(item.textContent)
    })

    console.log(Array.from([1,2,3,4], function (item) {
        return item * 2;
    }))
}

{
    console.log('fill', [1, 'a', undefined].fill(7));
    console.log('fill-over', [1, 2, 3, 4].fill(2, 2,4));
}

{
    let arr = [1, 'c', 'ks'];
    for (let index of arr.keys() ) {
        console.log('index', index)
    }
    for (let index of arr.values() ) {
        console.log('value:', index)
    }
    for (let [index, value] of arr.entries() ) {
        console.log('entries:', index, value)
    }

}

{
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(arr.find(function (item) {
        return item > 3
    }))
    console.log(arr.findIndex(function (item) {
        return item > 3
    }))
}

{
    let arr = [1, 2, 3, 4, 5, 6];
    console.log('number:', arr.includes(4))

}
