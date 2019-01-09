{
    let set = new Set()
    set.add(1)
    set.add(2)
    console.log('set:', set)
    console.log('set-size:', set.size)
}

{
    let arr = [1,2,3,4,5]
    let set = new Set(arr)
    console.log('set-arr:', set)
    console.log('set-arr-size:', set.size)
}

{
    let set = new Set()
    set.add(1)
    set.add(2)
    set.add(1)
    console.log('set-repeat:', set)
}

{
    //去重
    let arr = [1,2,3,4,5,1,2,3, '4']
    let set = new Set(arr)
    console.log(set)
}

{
    // 方法
    let arr = ['add', 'delete', 'clear', 'has']
    let set = new Set(arr)

    console.log('has', set.has('add'))
    console.log('delete', set.delete('add'), set)
    set.clear()
    console.log('clear', set)
}

{
    //遍历
    let arr = ['add', 'delete', 'clear', 'has']
    let set = new Set(arr)

    for (let item of set.keys()) {
        console.log('keys:', item)
    }
    for (let item of set.values()) {
        console.log('values:', item)
    }
    for (let item of set) {
        console.log('item:', item)
    }

    set.forEach(function (item) {
        console.log(item)
    })
}

{
    let map = new Map()
    let arr = ['123']
    map.set(arr, 456)
    console.log('map:', map, map.get(arr))
}

{
    let map = new Map([['b', 123], ['c', 234], ['d', 'asd']])
    console.log('map:', map)
    console.log('delete:', map.delete('b'), map)
    console.log('clear', map.clear(), map)
}


{
    let item = {key: 'value'}
    let set = new Set()
    let map = new Map()
    let obj = {}

    //增
    map.set('key', 'value')
    set.add(item)
    obj['key'] = 'value'

    console.log('add', map, set, obj)

    //查
    console.info({
        map_exist: map.has('key'),
        set_exist: set.has(item),
        obj_exist: 'key' in obj
    })

    // 改
    map.set('key', 'value2')
    set.key = 'value2'
    obj['key'] = 'value2'
    console.log('add', map, set, obj)

    //删除
    map.delete('key')
    set.delete(item)
    delete obj['key']
    console.log('add', map, set, obj)
}
