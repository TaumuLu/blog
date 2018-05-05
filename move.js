const fs = require('fs')
const path = require('path')

const { statSync, readFileSync, existsSync, mkdirSync, renameSync, rmdirSync, unlinkSync } = fs

class CollateMarkDown {
    constructor() {
        this.regTitle = /title:(.*)/
        this.regTags = /tags:(.*)/

        this.moveFileList = []
        this.deleteDirList = []
        this.noTagFileList = []
        this.noMDFileList = []
        this.rootPath = path.join(process.cwd(), 'source/_posts')

        this.init()
    }

    init() {
        const { rootPath } = this

        this.moveMarkDownFile(rootPath)
        this.deleteEmptyDir(rootPath)
        this.printResult()
    }

    readdirSync(readPath) {
        return fs.readdirSync(readPath).filter((f) => !f.startsWith('.'))
    }

    moveMarkDownFile(handlePath, dirName = null) {
        const { regTitle, regTags, moveFileList, noTagFileList, noMDFileList, readdirSync, rootPath } = this
        const files = readdirSync(handlePath)

        for (let file of files) {
            const currentPath = path.join(handlePath, file)
            const stat = statSync(currentPath)

            if (stat.isDirectory()) {
                this.moveMarkDownFile(currentPath, file)
            } else {
                if (file.endsWith('.md')) {
                    const data = readFileSync(currentPath, 'utf8')
                    const execTag = regTags.exec(data)
                    const fileName = execTag && execTag[1] && execTag[1].trim()

                    if (fileName) {
                        if (!dirName || fileName !== dirName) {
                            const targetPath = path.join(rootPath, fileName)
                            if (!existsSync(targetPath)) {
                                mkdirSync(targetPath)
                            }
                            renameSync(currentPath, path.join(targetPath, file))
                            moveFileList.push(file)
                        }
                    } else {
                        const execTitle = regTitle.exec(data)
                        const title = execTitle && execTitle[1] && execTitle[1].trim()
                        renameSync(currentPath, path.join(rootPath, file))
                        noTagFileList.push(file)
                    }
                } else {
                    renameSync(currentPath, path.join(rootPath, file))
                    noMDFileList.push(file)
                }
            }
        }
    }

    deleteEmptyDir(handlePath) {
        const { readdirSync, deleteDirList } = this

        const files = readdirSync(handlePath)
        for (let file of files) {
            const currentPath = path.join(handlePath, file)
            const stat = statSync(currentPath)

            if (stat.isDirectory()) {
                const files = readdirSync(currentPath)

                if(files.length === 0) {
                    this.deleteDir(currentPath)
                    deleteDirList.push(file)
                }
            }
        }
    }

    printResult() {
        const { moveFileList, deleteDirList, noTagFileList, noMDFileList } = this
        const printList = [
            {
                list: moveFileList,
                desc: 'md文件移动'
            }, {
                list: deleteDirList,
                desc: '文件夹删除'
            }, {
                list: noTagFileList,
                desc: 'md文件没有写tag'
            }, {
                list: noMDFileList,
                desc: '文件不是md'
            },
        ]
        printList.forEach((item) => {
            const { list, desc } = item
            const len = list.length
            if (len > 0) {
                console.log(`${len}个${desc}: ${list.join(',')}`)
            }
        })
    }

    // 移除文件夹及文件
    deleteDir(deletePath) {
        if (existsSync(deletePath)) {
            const files = fs.readdirSync(deletePath)
            files.forEach((file) => {
                var curPath = path.join(deletePath, file)
                if (statSync(curPath).isDirectory()) {
                    this.deleteDir(curPath)
                } else {
                    unlinkSync(curPath)
                }
            })
            rmdirSync(deletePath)
        }
    }
}

new CollateMarkDown()
