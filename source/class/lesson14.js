{
    let arr = ['hello', 'world']
    let map = arr[Symbol.iterator]()
    console.log(map.next())
    console.log(map.next())
    console.log(map.next())
}

{
    const obj = {
        start: [1,2,3],
        end: [7,8,9],
        [Symbol.iterator] () {
            let index = 0
            let arr = this.start.concat(this.end)
            let length = arr.length
            return {
                next () {
                    if (index < length) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    }

    for (let key of obj) {
        console.log(key)
    }
}
