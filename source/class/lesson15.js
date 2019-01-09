{
    // generator 定义
    let tell = function* () {
        yield  'hello'
        yield  'world'
        return 'end'
    }

    let func = tell()

    console.log(func.next())
    console.log(func.next())
    console.log(func.next())
    console.log(func.next())
}

{
    // generator的应用
    let obj = {}
    obj[Symbol.iterator] = function* () {
        yield 1
        yield 2
        yield 3
        return 4
    }

    for (let key of obj){
        console.log('value:', key)
    }
}

{
    // generator的最佳应用
    let obj = function* () {
        while (1) {
            yield 'A'
            yield 'B'
            yield 'C'
        }
    }

    let state = obj()
    console.log(state.next())
    console.log(state.next())
    console.log(state.next())
    console.log(state.next())
    console.log(state.next())
    console.log(state.next())
}

{
    // 前端页面中抽奖模块的逻辑模拟，非常实用
    let draw = function (count) {
        //业务逻辑
        console.info(`剩余${count}次`)
    }

    let residue = function* (count) {
        while (count > 0) {
            count--
            yield draw(count)
        }
    }

    let star = residue(5)
    let btn = document.createElement('button')
    btn.id = 'start'
    btn.textContent = '抽奖'
    document.body.appendChild(btn)
    document.getElementById('start').addEventListener('click', function () {
        star.next()
    }, false)

}

{
    //长轮询机制：页面不断查询服务端口某个状态值
    let ajax = function* () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({code:1})
            }, 1000)
        })
    }

    let pull = function () {
        let generator = ajax()
        let step = generator.next()
        step.value.then(function (data) {
            if (data.code != 0) {
                setTimeout(function () {
                    console.log('wait')
                    pull()
                }, 1000)
            } else {
                console.log('stop')
            }
        })
    }

    pull()
}
