---
title: Node学习
date: 2017-02-27 16:46:55
tags: Node
---

## 基础

### 全局对象 global
- console
    + log()
    + error()
    + trace()
process
    + argv
    + stdout
        * write()
    + stdin
        * resume()
    + stderr
    + nextTick(callback)

### NodeJS有三大核心
- CallBack回调
- Event事件
- Stream流


慕课网学习
    一、关注
        1、nodejs.org看看nodejs的版本升级，新特性的加入，重要bug的修复等
        2、www.npmjs.com模块社区，看他人源代码，省力
        3、github.com大量的项目和 源码
        4、stackoverflow.com技术解答社区以及查询相关资源，环境配置，异常均可找到答案
    二、安装事项
        1、Node.js版本
            偶数位为稳定版，奇数位为开发版
        2、Windows下安装，Path下环境变量
    三、Node.js
        1、全局变量process
    四、模块与包管理工具
        Commonjs
            一套规范
            模块独立但不孤立，三个部分定义、标识、引用
        1、依赖关系
        2、命名空间
        3、代码组织
        Nodejs通过npm来引入管理模块/包
        模块 {
            核心模块
            文件模块
            第三方模块
        }
        Nodejs模块对象 {
            require对象
                从外部获取模块的接口，即所获取模块的exports对象
            exports对象
                公开接口
                module.exports     真正的接口
                exports            辅助工具，最终返回给调用的是module.exports而不是exports
            exports 是指向的 module.exports 的引用
            module.exports 初始值为一个空对象 {}，所以 exports 初始值也是 {}
            require() 返回的是 module.exports 而不是 exports

            exports和module.exports的关系是:exports 起初是一個指向 module.exports 对象的变量
        }
    五、Nodejs API
        URI => URL
        URL {
            url.pase()
            url.format()
            url.resolve()
        }
        QueryString {
            querystring.stringify()
            querystring.parse()
            querystring.escape()
            querystring.unescape()
        }
        HTTP {
            chrome://net-internals/#dns
            浏览器自身DNS缓存
            系统自身DNS缓存
            读取本地HOST文件
                宽带运营商查看本地缓存
                运营商服务器发起一个迭代的DNS解析请求
            浏览器发起一个DNS的系统调用
            浏览器获得域名对应的IP地址后发起HTTP三次握手

            请求、响应 {
                http头和正文信息
            }
            模块 {

            }
        }
        Events {
            EventEmitter {
                addListener()
                removeListener()
                    removeAllListeners()
                setMaxListeners()
                emit()
                listeners
                    EventEmitter.listenerCount()
            }
        }




















网上学习
    一、Node.js基础
        1、Node.js是
            Nodejs就是一个解析器
            运行在浏览器中的JS的用途是操作DOM，浏览器就提供了document之类的内置对象
            运行在NodeJS中的JS的用途是操作磁盘文件或搭建HTTP服务器，NodeJS就相应提供了fs、http等内置对象
            NodeJS的目的是为了实现高性能Web服务器，事件机制和异步IO模型
        2、模块
            编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用
            require
                在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象。
                模块名可使用相对路径（以./开头）或绝对路径（以/或C:之类的盘符开头），模块名中的.js扩展名可以省略
            exports
                当前模块的导出对象，用于导出模块公有方法和属性。别的模块通过require函数使用当前模块时得到的就是当前模块的exports对象
            module
                访问到当前模块的一些相关信息，最多的用途是替换当前模块的导出对象。如模块导出对象默认是一个普通对象，如果想改成一个函数的话，可以使用
            模块初始化
                一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。
            主模块
                通过命令行参数传递给NodeJS以启动程序的模块为主模块。主模块负责调度组成整个程序的其它模块完成工作
        3、二进制模块
            NodeJS支持使用C/C++编写二进制模块，编译好的二进制模块除了文件扩展名是.node外，和JS模块的使用方式相同
    二、代码的组织和部署
        1、模块路径解析规则
            之前两种路径在模块之间建立了强耦合关系，一旦某个模块文件的存放位置需要变更，使用该模块的其它模块的代码也需要跟着调整，牵一发而动全身。因此，require函数支持第三种形式的路径，写法类似于foo/bar，并依次按照以下规则解析路径，直到找到模块位置
                内置模块
                node_modules目录
                NODE_PATH环境变量
        2、包
            由多个子模块组成的大模块为包，所有子模块放在同一个目录里
            index.js
                当模块的文件名是index.js，加载模块时可以使用模块所在目录的路径代替模块文件路径
            package.json
                自定义入口模块的文件名和存放位置，就需要在包目录下包含一个package.json文件，并在其中指定入口模块的路径。
        3、命令程序
            用NodeJS编写，要么是一个包，要么是一个命令行程序，而前者最终也会用于开发后者。
            Windows
                靠.cmd文件来解决问题。假设node-echo.js存放在C:\Users\user\bin目录，并且该目录已经添加到PATH环境变量里了。接下来需要在该目录下新建一个名为node-echo.cmd的文件，文件内容如下：
                @node "C:\User\user\bin\node-echo.js" %*
                这样处理后，我们就可以在任何目录下使用node-echo命令了。
        4、工程目录
            编写一个命令行程序，一般我们会同时提供命令行模式和API模式两种使用方式，并且我们会借助三方包来编写代码。除了代码外，一个完整的程序也应该有自己的文档和测试用例。
        5、npm
            npm是随同NodeJS一起安装的包管理工具，常见的使用场景有以下几种
                允许用户从npm服务器下载别人编写的三方包到本地使用
                允许用户从npm服务器下载并安装别人编写的命令行程序到本地使用
                允许用户将自己编写的包或命令行程序上传到npm服务器供别人使用
            下载三方包
                npm install package
                下载好之后，包就放在了工程目录下的node_modules目录中，在代码中只需要通过require('package')的方式就好，无需指定三方包路径。
                    想要下载指定版本的话，可以在包名后边加上@<version>
                如果使用到的三方包比较多，在终端下一个包一条命令地安装太繁琐。因此npm对package.json的字段做了扩展，允许在其中申明三方包依赖。
                npm会根据包中申明的三方包依赖自动下载进一步依赖的三方包
            安装命令行程序
                从npm服务上下载安装一个命令行程序的方法与三方包类似。只要package自己配置好了相关的package.json字段，只需要使用命令安装程序。
                参数g表示全局安装，npm会自动创建好Linux系统下需要的软链文件或Windows系统下需要的.cmd文件。
                Windows默认安装位置
                    - %APPDATA%\npm\
                        - node_modules\
                            + package\
                        ...
                        node-echo.cmd
            发布代码
            版本号
                使用npm下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码
                    语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。
                        如果只是修复bug，需要更新Z位。
                        如果是新增了功能，但是向下兼容，需要更新Y位。
                        如果有大变动，向下不兼容，需要更新X位。
                版本号有了这个保证后，在申明三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。NPM支持的所有版本号范围指定方式可以查看官方文档。
            灵机一点
    三、文件操作





Node.js {
    基本模块 {
        global
            唯一全局对象
        process {
            代表当前Node.js进程
            process.nextTick()
                下一事件响应中执行
        }
    }
    内置模块 {
        fs {
            文件系统模块，负责读写文件，可同步异步
            读取文件 {
                readFile() {
                    异步执行
                    err 正常读取时返回null，错误时返回错误对象
                    data 正常读取时返回string，错误时返回undefined
                }
                readFileSync() {
                    同步执行
                    直接返回回调函数的data
                }
            }
            写入文件 {
                writeFile() {
                    同步执行
                    回调函数只返回err参数
                }
                writeFileSync()
            }
            stat() {
                异步执行
                返回stat对象，获取文件详细信息
            }
            statSync() {
                同步执行
            }
            同步或是异步 {
                由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。

                服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。
            }
        }
    }
}




核心模块 {
    util {
        inherits(constructor, superConstructor)
        inspect(object, [showHidden], [depth], [colors])
    }
    events {
        EventEmitter {
            on(event, listener)
            once(event, listener)
            emit(event, [arg1], [arg2], [...])
            removeListener(event, listener)
            removeAllListeners([event])

            事件 {
                error
            }
            继承者 {
                fs,net,http
            }
        }
    }
    fs {
        readFile(filename, [encoding], [callback(err,data)])
        readFileSync(filename, [encoding])

        writeFile(filename, data, [encoding], [callback(err)])
        writeFileSync(filename, data, [encoding])

        open(path, flags, [mode=0666], [callback(err, fd)])
        openSync(path, flags, [mode])

        unlink(path, [callback(err)])
        unlinkSync(path)

        mkdir(path, [mode], [callback(err)])
        mkdirSync(path, [mode])

        rmdir(path, [callback(err)])
        rmdirSync(path)

        readdir(path, [callback(err, files)])
        readdirSync(path)

        realpath(path, [callback(err, resolvedPath)])
        realpathSync(path)

        write(fd, buffer, offset, length, position, [callback(err, bytesWritten, buffer)])
        writeSync(fd, buffer, offset, length, position)

        read(fd, buffer, offset, length, position, [callback(err, bytesRead, buffer)])
        readSync(fd, buffer, offset, length, position)

        close(fd, [callback(err)])
        closeSync(fd)

        补充 {
            同步方式操作的文件内容会以函数返回值的形式返回, 如果有错误发生, fs将会抛出异常, 需要使用  try和 catch捕捉并处理异常

            [encoding] {
                如果指定了encoding, data是一个解析后的字符串, 否则 data将会是以 Buffer形式表示的二进制数据
            }
            [flags] {
                r, r+, w, w+, a, a+
            }
        }
    }
    http {
        Server {
            事件 {
                request(req, res) {
                    req => http.ServerRequest
                    res => http.ServerResponse
                }
                connection(socket) {
                    socket => net.socket
                }
                close
                checkContinue
                upgrade
                clientError
            }
        }
        createServer([requestListener])
        http.ServerRequest {
            complete
            httpVersion
            method
            url
            headers
            trailers
            connection   当前 HTTP连接套接字, 为 net.Socket的实例
            socket       connection属性的别名
            client

            事件 {
                data(chunk)
                    如果该事件没有被监听, 那么请求体将会被抛弃, 该事件可能会被调用多次
                end
                close
                    用户当前请求结束时被触发, 不同于 end, 如果用户强制终止了传输, 也还是调用 close
            }
        }
        http.ServerResponse {
            writeHead(statusCode, [headers])
                headers函数在一个请求内最多只能调用一次, 不调用会自动生成一个响应头
            write(data, [encoding])
                data是字符串, 那么需要指定 encoding来说明它的编码方式, 默认utf-8
                可以被多次调用
            end([data], [encoding], [callback])
                该函数必须被调用一次, 如果不调用该函数，客户端将永远处于等待状态
        }

        request(options, callback) {
            options {
                host
                port = 80
                method = GET
                path = '/'
                headers
            }
            callback => http.ClientResponse

            return http.ClientRequest实例
        }
        get(options, callback) {
            区别在于 http.get自动将请求方法设为了 GET请求, 同时不需要手动调用 req.end()
        }
        http.ClientRequest {
            write()
            end()
                所有写结束以后必须调用 end函数以通知服务器, 否则请求无效
            abort()
            setTimeout(timeout, [callback])
            setNoDelay([noDelay])
            setSocketKeepAlive([enable], [initialDelay])

            事件 {
                response
            }
        }
        http.ClientResponse {
            statusCode
            httpVersion
            headers
            trailers

            setEncoding([encoding])
                data事件被触发时, 数据将会以 encoding编码, 默认是 null, 即不编码 Buffer形式存储
            pause()
            resume()

            事件 {
                data(chunk)
                end
                close
            }
        }
    }
    url {
        parse()
    }
    querystring {
        parse()
    }
}


node-inspector

调试工具（基于npm安装）：node-inspector

执行流程：

1、安装 node-inspector

npm install node-inspector -g

2、监听端口（执行）

node-inspector

run

3、cmd到你的目录下执行node debug模式

node --debug-brk server.js

run

4、打开谷歌浏览器，在地址栏输入以上显示的地址：http://127.0.0.1:8080/debug?port=5858 就可以进行调试了，成功后会到以下页面，按F8即可执行到你打断点处，如果没打则直接结束。（如果不行请刷新下）
