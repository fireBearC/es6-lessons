{
    let obj = {
        time: '2017-3-11',
        name: 'net',
        _r: 133
    }

    let moniter = new Proxy(obj, {
        //拦截对象属性的读取
        get(target, key) {
            return target[key].replace('2017', '2018')
        },
        //拦截对象设置属性
        set(target, key, value) {
            if ( key === 'name' ) {
                return target[key] = value
            } else {
                return target[key]
            }
        },
        // 拦截操作
        has (target, key) {
            if (key === 'name') {
                return target[key]
            } else {
                return false
            }
        }
    })

    console.log('proxy-get', moniter.time)
    console.log('obj-get', obj.time)

    moniter.name = 'Amy'
    moniter.time = '2016-7-8'
    console.log('proxy-set',  moniter.name)
    console.log('proxy-set',  moniter.time)

    console.log('has', 'name' in moniter)
    console.log('has', 'time' in moniter)
}

{
    let obj = {
        time: '2017-3-11',
        name: 'net',
        _r: 133
    }

    console.log('Reflect get:', Reflect.get(obj, 'time'))
    Reflect.set(obj, 'name', 'Amy')
    console.log('Reflect set:', obj)
    console.log('Reflect has:', Reflect.has(obj, 'name'))
}

{
    function validator (target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set (target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let va = this._validator[key]
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy)
                    } else {
                        throw Error(`不能设置 ${key} 到 ${value}`)
                    }
                } else {
                    throw Error(`${key} 不存在`)
                }
            }
        })
    }

    const personValidators = {
        name (val) {
                return typeof val === 'string'
        },
        age (val) {
            return typeof val === 'number' && val > 18
        }
    }

    class Person {
        constructor (name, age) {
            this.name = name
            this.age = age
            return validator(this, personValidators)
        }
    }

    const person = new Person('lilei', 30)

    console.log(person)

    person.name = 48
}
