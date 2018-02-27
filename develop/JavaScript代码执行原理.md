JavaScript归类为"动态"或"解释执行"语言，但事实上它是一门编译语言，但并非传统编译语言

JS Engine（JS引擎）
Runtime（运行上下文）
Call Stack (调用栈)
Event Loop（事件循环）
Callback (回调)

编译执行JavaScript {
    编译执行者 {
        编译器 {
            编译代码，负责语法分析及代码生成等
        }
        引擎 {
            处理整个JavaScript代码的编译和执行
            涉及LHS和RHS查找
        }
        作用域 {
            维护由所有声明的标识符组成的一系列查询，供编译器和引擎来查找
            确定当前执行的代码对这些标识符的访问权限
        }
    }
    编译过程 {
        1、分词/词法分析 (分解字符串)
        2、解释/语法分析 (生成语法结构树-AST)
        3、代码生成 (将AST转换为可执行代码)
    }
    按代码块顺序执行执行 (边编译边处理) {
        1、读取第一个代码块
        2、语法分析，有错误则则报语法错误 (如符号不匹配)，无错则执行5
        3、进入预编译阶段，对var和函数声明做预处理 (永远不会报错，因为只解析正确的声明)
        4、进入执行阶段，有错误则报错 (如未定义的变量)
        5、如有下一个代码段，则读取下一个代码段，执行2
        注: JavaScript代码块 {
            独立性 {
                其他代码块报错不会相互影响，代码仍可执行
            }
            共享性 {
                不同代码块能访问到不同代码块中的变量
            }
            注: 代码块的执行按照其编写顺序
        }
    }
}

解析过程 {
    预编译阶段 (预处理) {
        声明提前，由编译器来做
    }
    执行阶段 {
        按代码顺序执行，由引擎来做
    }
}

上下文 {
    概念 {
        可创建上下文的代码 {
            Global
            Function
            Eval
        }
        上下文 {
            上下文组 (上下文堆栈、EC Stack)
            执行上下文 (组成上下文组的单独上下文、Execution Context)
        }
        所有可执行上下文组成上下文组/堆栈 (EC Stack) {
            堆栈底部是全局上下文
            堆栈顶部是当前的执行上下文
        }
    }
    上下文创建 {
        先进入全局执行上下文环境 {
            执行过程中依次激活全局下的执行上下文环境 (Function、Eval)
        }
        再进入全局下其他执行上下文环境 {
            按照代码顺序依次激活其他执行上下文
            激活其它上下文的某个上下文被称为 调用者 (caller)，被激活的上下文被称为被调用者 (callee)
                当一个caller激活了一个callee，那么这个caller就会暂停它自身的执行，然后将控制权交给这个callee，于是这个callee被放入堆栈，当这个callee的上下文结束之后，会把控制权再次交给它的caller，然后caller会在刚才暂停的地方继续执行。在这个caller结束之后，会继续触发其他的上下文
                一个callee可以用返回 (return) 或者抛出异常 (exception) 来结束自身的上下文
            由此不断激活弹出组成上下文堆栈
        }
        补充 {
            单线程、同步执行
            唯一的一个全局上下文
            函数的执行上下文的个数没有限制
            每次某个函数被调用，就会有个新的执行上下文为其创建，即使是调用的自身函数，也是如此
        }
    }
}

执行上下文 {
    处理执行上下文代码 {
        进入执行上下文阶段 (全局上下文和函数上下文中的表现是一样的) {
            函数的所有形参 (函数上下文中)
            所有函数声明
            所有变量声明
            补充 {
                只声明未赋值，函数除外
                按以上顺序依次声明，重复声明会忽略，函数会覆盖重复声明
            }
        }
        执行代码阶段 {
            按代码顺序一行行执行
            变量赋值
            函数引用
            执行其它代码
            补充 {
                命名保存的函数表达式只声明未赋值，如同变量
                未命名保存的函数表达式只有在它自己的定义或递归中才能被调用
                未声明的变量在代码执行阶段才被创建
                    未声明的变量可被delete删除，因为其为全局的属性
                    Eval上下文中的变量也可被删除，即使声明
            }
        }
    }
    执行上下文可理解为对象，包含几个属性 {
        1、变量对象 (VO) {
            概念 {
                存储着在上下文中声明的以下内容 {
                    变量 (var, 变量声明)
                    函数声明 (FunctionDeclaration, 缩写为FD)
                    函数的形参
                }
            }
            全局上下文变量对象 (GlobalContextVO) {
                VO === this === global
                全局对象初始创建阶段将Math、String、Date、parseInt等属性作为自身属性并初始化
                存储定义在上下文中的声明 {
                    变量声明 (var)
                    函数声明 (function)
                }
            }
            函数上下文变量对象 (FunctionContextVO) {
                VO === AO
                在函数执行上下文中，VO是不能直接访问的，此时由活动对象(AO)扮演VO的角色
                活动对象在函数上下文中作为变量对象使用，即函数的变量对象保持不变，包含存储变量与函数声明之外，还包含以及特殊对象arguments
                活动对象是在进入函数上下文时刻被创建的，它通过函数的arguments属性初始化，arguments属性的值是Arguments对象
                存储声明及arguments {
                    函数的所有形参 function(x,y,z)
                    变量声明 (var)
                    函数声明 (function)
                    arguments {
                        callee
                        length
                        properties-indexes (值为函数的参数值)
                            值的个数等于arguments.length，它的值和实际传递进来的参数之间是共享的
                    }
                }
            }
        }
        2、作用域链 {
            作用域链是内部上下文所有变量对象(包括父变量对象)的列表，此链用来变量查询
            函数 {
                函数上下文的作用域链在函数调用时创建的，包含活动对象和这个函数内部的[[scope]]属性
                    Scope = [[Scope]] + AO/VO
                函数的的生命周期分为创建和激活阶段(调用时)
                函数创建时获得函数的[[scope]]属性，通过该属性访问到所有父上下文的变量
                    例外，通过函构造函数创建的函数的[[scope]]属性总是唯一的全局对象
                [[scope]]是所有父变量对象的层级链，处于当前函数上下文之上，在函数创建时存于其中
                [[scope]]在函数创建时被存储－－静态（不变的），直至函数销毁
                    函数可以永不调用，但[[scope]]属性已经写入，并存储在函数对象中
            }
            二维作用域链 {
                一个属性在对象中没有直接找到，查询将在原型链中继续
            }
            ECMAScript中，在代码执行阶段有两个声明能修改作用域链
                with声明和catch语句，它们添加到作用域链的最前端
                Scope = [[Scope]] + AO/VO + withObject/catchObject
        }
        3、this指针 {
            作为执行上下文中的一个属性
            全局代码中的this {
                在全局代码中，this始终是全局对象本身，可间接引用到它
                    浏览器下默认指向Window
            }
            函数代码中的this {
                this值的首要特点它不是静态的绑定到一个函数
                this是进入上下文时确定，在一个函数代码中，这个值在每一次调用时完全不同
                在代码运行时的this值是不变的，因为它不是一个变量，就不可能为其分配一个新值
                影响函数代码中this的值有几个因素 {
                    在通常的函数调用中，this由激活上下文代码的调用者来提供的，即调用函数的父上下文，this取决于调用函数的方式
                }
                引用类型 {
                    var valueOfReferenceType = {
                        base: base object,
                        propertyName: property name
                    }
                    引用类型的值只有两种情况 {
                        处理一个标示符
                        一个属性访问器
                    }
                }
                在一个函数上下文中，this由调用者提供，由调用函数的方式来决定
                    如果调用括号()的左边是引用类型的值，this将设为引用类型值的base对象(base object)，在其他情况下(与引用类型不同的任何其它属性)，这个值为全局对象或undefined
            }
        }
    }
}



Example:

var a = 1;
function parent() {
    var b = 2;
    function child() {
        var c = 3;
    }
}
var fe = function my() {
    var ov = 2333;
}

上下文堆栈 (EC Stack) {
    Function child EC (函数child执行上下文-当前执行上下文 (Active EC) ) {
        变量对象 (VO) {
            b : 2,
            c : 3
        }
    }
    Function parent EC (函数parent执行上下文) {
        变量对象 (VO) {
            child : < reference to function >,
            a : 1,
            b : 2
        }
    }
    Global EC (全局执行上下文) {
        变量对象 (VO) {
            parent : < reference to function >,
            a : 1,
            fe : < reference to FunctionExpression "my" >
        }
    }
}



函数 {
    函数声明 (FD) {
        1、有一个特定的名称
        2、在源码中的位置 {
            要么处于程序级 (Program level)
            要么处于其它函数的主体 (FunctionBody)
            注: 不可能在表达式位置或一个代码块中定义它
        }
        3、在进入上下文阶段创建
        4、影响变量对象 (VO)
        5、以 function name(){} 方式声明
    }
    函数表达式 (FE) {
        1、在源码中须出现在表达式的位置 (FE总是处在表达式的位置)
        2、有可选的名称
        3、不会影响变量对象
        4、在代码执行阶段创建
        注: 表达式定义时,FE只能在代码执行阶段创建而且不存在于变量对象中
    }
}

函数声明只作为顶级语句，并非真正的语句，不能出现在其他语句中，函数表达式可以

JS函数基于词法作用域 {
    函数作用域链 {
        在定义时就已确定了作用域 (上级的作用域链)，并保存在[[Scope]]属性中
        在调用时创建对象保存自身的局部变量 (VO)，并添加到定义时的作用域链末端[[Scope]]+VO
    }
    闭包 {
        保存并共享外部函数中的变量，共享一个作用域链
        闭包也是函数本身有arguments对象，不能用此来访问外部函数arguments对象
    }
}

调用函数 {
    1、作为函数 {
        this = window(非严) || undefined(严)
    }
    2、作为方法 {
        this = 调用对象
    }
    3、作为构造函数 {
        this = 所创建的新对象
    }
    4、通过自身的call()和apply()方法间接调用 {
        this = 绑定的对象
    }
}

if( !Function.prototype.bind ) {
    Function.prototype.bind = function( o, arg ) {
        var self = this,
            bindArg = arguments;
        return function() {
            var arg = [],
                i;
            for( i=1; i<bindArg.length; i++ ) arg.push(bindArg[i]);
            for( i=0; i<arguments.length; i++ ) arg.push(arguments[i]);
            return self.apply( 0, arg );
        }
    }
}
