ES5 {
    Model {
        "use strict"
    }
    Json {
        JSON.parse()
        JSON.stringify()
    }
    Array {
        Array.isArray()
        Array.prototype.indexOf()
        Array.prototype.lastIndexOf()
        Array.prototype.forEach()
        Array.prototype.map()
        Array.prototype.filter()
        Array.prototype.every()
        Array.prototype.some()
        Array.prototype.reduce()
        Array.prototype.reduceRight()
    }
    Object {
        Object.getPrototypeOf()
        Object.getOwnPropertyDescriptor()
        Object.getOwnPropertyNames()
        Object.create()
        Object.defineProperty()
        Object.defineProperties()
        Object.seal()
        Object.freeze()
        Object.preventExtensions()
        Object.isSealed()
        Object.isFrozen()
        Object.isExtensible()
        Object.keys()
    }
    Function {
        Function.prototype.bind()
    }
}



ES6 {
    Variables {
        let {
            不存在变量提升
            暂时性死区
            不允许重复声明
        }
        const {
            和let声明相同
            声明为只读的常量，一旦声明，常量的值就不能改变
            一旦声明变量，就必须立即初始化为其赋值
        }
        import {

        }
        class {

        }
        块级作用域 {
            允许在块级作用域之中声明函数
            块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用
        }
        全局对象 {
            var命令和function命令声明的全局变量，依旧是全局对象的属性
            let命令、const命令、class命令声明的全局变量，不属于全局对象的属性
        }
    }
    解构赋值 {
        数组 {
            只要等号两边的模式相同，左边的变量就会被赋予对应的值
            如果解构不成功，变量的值就等于undefined
            如果等号的右边不是数组即不是可遍历的结构，那么将会报错
            只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值
            解构赋值允许指定默认值
                使用严格相等运算符，判断是否有值。不严格等于undefined，默认值不会生效
                如果默认值是表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
                默认值可以引用解构赋值的其他变量，但该变量必须已经声明
        }
        对象 {
            数组的元素是按次序排列的，变量的取值由它的位置决定
            而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
            如果变量名与属性名不一致 {:} = {:}
                采用这种写法时，变量的声明和赋值是一体的。对于let和const来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错
                可以在声明后不再次声明，需要用括号括起来以当作赋值语句而非代码块
            和数组一样，解构也可以用于嵌套结构的对象
            对象的解构也可以指定默认值
                默认值生效的条件是，对象的属性值严格等于undefined
            如果解构失败，变量的值等于undefined
        }
        字符串 {
            字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象
            类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值
        }
        数组和布尔值 {
            解构赋值时，如果等号右边是数值和布尔值，则会先转为对象
            解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象
                undefined和null无法转为对象，所以对它们进行解构赋值会报错
        }
        函数参数 {
            函数参数的解构也可以使用默认值
                为函数的参数指定默认值和为变量指定默认值，会得不同的结果
                undefined就会触发函数参数的默认值
        }
        圆括号 {
            变量声明语句中，不能带有圆括号
            函数参数中，模式不能带有圆括号
            赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中
            可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号
        }
    }
    Function {
        => {
            this绑定
                绑定this值在定义时，而非调用时
            不可作为构造函数
            不可使用arguments，可使用Rest
            不可使用yield命令

            箭头函数自身没有this值，使用外部this，因此绑定，因此不可作为构造函数
                也因此引用外部arguments
                因此没有call()、apply()、bind()改变this指向的方法
        }
        reset参数 {
            rest参数中的变量代表一个数组，所以数组特有的方法都可以用于这个变量
            rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
            函数的length属性，不包括rest参数
        }
        扩展运算符(...) {
            好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列
            展运算符可以展开数组，替代数组的apply方法
            应用 {
                合并数组
                与解构赋值结合
                    如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错
                函数的返回值
                字符串
                实现了Iterator接口的对象
                Map和Set结构，Generator函数
            }
        }
    }
    Data {
        Map {
            set()
            get()
            has()
            delete()
        }
        Set {
            add()
            has()
            keys()
            delete()
            clear()
        }
    }
    Iterator {
        数据结构 {
            Array、Object、Map、Set
        }
        需要一种统一的接口机制，来处理所有不同的数据结构
        遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作
        作用 {
            为各种数据结构，提供一个统一的、简便的访问接口
            使得数据结构的成员能够按某种次序排列
            ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费
        }
        遍历器对象本质上，是一个指针对象，调用next方法返回包含value和done的对象
        默认的Iterator接口部署在数据结构的Symbol.iterator属性
        ES6中，有三类数据结构原生具备Iterator接口：数组、某些类似数组的对象、Set和Map结构
        for...of {
            相比for...in返回属性，其返回集合的值
        }
    }
    运算符 {
        扩展运算符 {
            扩展运算符用三个点号表示，功能是把数组或类数组对象展开成一系列用逗号隔开的值
        }
        rest运算符 {
            rest运算符也是三个点号，不过其功能与扩展运算符恰好相反，把逗号隔开的值序列组合成一个数组
        }

        对于三个点号，三点放在形参或者等号左边为rest运算符; 放在实参或者等号右边为扩展运算符，或者说，放在被赋值一方为rest运算符，放在赋值一方为扩展运算符
    }
    Promise {
        Promise.resolve()
        Promise.reject()
        Promise.prototype.then()
        Promise.prototype.catch()
        Promise.all()
        Promise.race()

        Promise在定义时，函数已经执行了
        Promise构造函数只接受一个参数，即带有异步逻辑的函数。这个函数在new Promise时已经执行了,只不过在没有调用then之前不会resolve或reject

        在then方法内部，我们可以做三件事 {
            1、return 一个promise对象
            2、return 一个同步的值或者是 undefined
            3、同步的 throw 一个错误
        }
    }
    Generator {
        可以在执行过程中多次返回通过yield
        function* Func(){ yield }
        yield
        next()
        throw()
        Generator可以在执行过程中多次返回，可看作记住执行状态的函数
    }
    Symbol {
        原始数据类型Symbol，表示独一无二的值
        Symbol函数前不能使用new命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不是对象
        由于Symbol值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型
        Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述
            Symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的

        Symbol值不能与其他类型的值进行运算，会报错
        Symbol值可以显式转为字符串
        Symbol值也可以转为布尔值，但是不能转为数值

        Symbol值作为对象属性名时，不能用点运算符
        在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中
            如果Symbol值不放在方括号中，该属性的键名就是字符串值，而不是该属性所代表的那个Symbol值
        Symbol值作为属性名时，该属性还是公开属性，不是私有属性

        Symbol作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()返回。但它也不是私有属性，Object.getOwnPropertySymbols方法，可以获取指定对象的所有Symbol属性名

        Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的Symbol值
        Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和Symbol键名。
    }
    Module {
        ES6的模块自动采用严格模式，不管有没有在模块头部加上"use strict"
        export {
            对外接口
            可直接输出或一起大括号输出
            as 重命名
            export 不能出现在块级作用域中
        }
        import {
            接收一个对象用大括号表示，其中指定导入的变量名，必须与被导入模块对外接口的名称相同
            as 重命名
            import 命令具有提升效果，会提升到整个模块的头部，首先执行
            import 语句可以与 export 语句写在一起
            整体加载，用星号（*）指定一个对象，所有输出值都加载在这个对象上面
        }
        export default {
            为模块指定默认输出
            其他模块加载该模块时，import命令可以为该导入模块指定任意名字
            import 命令后面不用加大括号
            export default 命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句
            可同时输入默认方法和其他变量
                import defaule, { other } from './default';
        }
        模块的继承 {
            export * from ... 输入再输出该模块的接口，会忽略该模块的 default
        }
        ES6模块加载的实质 {
            CommonJS 模块输出的是一个值的拷贝，会缓存值
            ES6 模块输出的是值的引用，动态引用，不会缓存值
                ES6 输入的模块变量是只读的，对它进行重新赋值会报错
                export 通过接口输出的是同一个值，不同的脚本加载这个接口，得到的都是同样的值
        }
        循环加载 {
            CommonJS
                CommonJS的一个模块，就是一个脚本文件。require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象
                CommonJS模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存
                加载时执行，即脚本代码在require的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出
                CommonJS输入的是被输出值的拷贝，不是引用
                CommonJS模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，两者可能会有差异。所以，输入变量的时候，必须非常小心
            ES6
                ES6模块是动态引用，import从一个模块加载变量那些变量不会被缓存，而是成为一个指向被加载模块的引用，真正取值的时候能够取到值
        }
    }
}



