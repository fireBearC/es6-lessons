{
    class Parent {
        constructor (name = 'mukewang') {
            this.name = name
        }
    }
    let p = new Parent()
    console.log('parent:', p)
}

{
    //继承
    class Parent {
        constructor (name = 'mukewang') {
            this.name = name
        }
    }

    class Child extends Parent {

    }

    let c = new Child()
    console.log('child:', c)

}

{
    //继承--> 子类传递传输给父类
    class Parent {
        constructor (name = 'mukewang') {
            this.name = name
        }
    }

    class Child extends Parent {
        constructor (name = 'child') {
            super(name)
            this.type = 'childType'
        }
    }

    let c = new Child()
    console.log('child:', c)
}

{
    // getter, setter
    class Person {
        constructor (name = 'mukewang') {
            this.name = name
        }

        get realName () {
            return `real+${this.name}`
        }
        set realName (name) {
            this.name = name
        }
    }

    let p = new Person()
    console.log('name:', p.name)
    console.log('realname:', p.realName)

    p.realName = 'end'
    console.log('realname2:', p.realName)
}

{
    //静态方法
    class Person {
        constructor(name = 'mukewang') {
            this.name = name
        }

        static tell() {
            console.log('tell')
        }
    }

    Person.tell()
}

{
    //静态属性的定义
    class Person {
        constructor(name = 'mukewang') {
            this.name = name
        }

        static tell() {
            console.log('tell')
        }
    }

    Person.type = 'newType'
    console.log("static Pro:", Person.type)
}

