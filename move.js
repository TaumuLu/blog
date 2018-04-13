const fs = require('fs')
const path = require('path')

const rootPath = path.join(process.cwd(), 'source/_posts')
const regTitle = /title:(.*)/
const regTags = /tags:(.*)/
const { readdirSync, statSync, readFileSync, existsSync, mkdirSync, renameSync } = fs


let moveFileCount = 0
function moveFunc(handlePath, dirName = null) {
    const files = readdirSync(handlePath)

    for (let file of files) {
        const currentPath = path.join(handlePath, file)
        const stat = statSync(currentPath)

        if (stat.isDirectory()) {
            moveFunc(currentPath, file)
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
                        moveFileCount += 1
                        renameSync(currentPath, path.join(targetPath, file))
                    }
                } else {
                    const execTitle = regTitle.exec(data)
                    const title = execTitle && execTitle[1] && execTitle[1].trim()
                    console.warn(`"${title}"文件没有写tag`)
                    renameSync(currentPath, path.join(rootPath, file))
                }
            } else {
                // renameSync(currentPath, rootPath)
            }
        }
    }
}


moveFunc(rootPath)
console.log(`${moveFileCount}个文件移动`)
// deleteFunc(rootPath)

// const deleteFile = (deletePath) => {
//   if (existsSync(deletePath)) {
//     const files = readdirSync(deletePath)
//     files.forEach((file) => {
//       var curPath = path.join(deletePath, file)
//       if (statSync(curPath).isDirectory()) {
//         deleteFile(curPath)
//       } else {
//         unlinkSync(curPath)
//       }
//     })

//     rmdirSync(deletePath)
//   }
// }


// function deleteFunc(handlePath) {
//     const files = readdirSync(handlePath)
//     for (let file of files) {
//         const currentPath = path.join(handlePath, file)
//         const stat = statSync(currentPath)

//         if (stat.isDirectory()) {

//         }
//     }
// }

// function deleteall(path) {
//     var files = []
//     if(fs.existsSync(path)) {
//         files = fs.readdirSync(path)
//         files.forEach(function(file, index) {
//             var curPath = path + "/" + file
//             if(fs.statSync(curPath).isDirectory()) { // recurse
//                 deleteall(curPath)
//             } else { // delete file
//                 fs.unlinkSync(curPath)
//             }
//         })
//         fs.rmdirSync(path)
//     }
// };

// var fs = require('fs'),
//     stdin = process.stdin,
//     stdout = process.stdout;
// var stats = [];

// fs.readdir(process.cwd(), function(err, files) {
//     console.log(' ');

//     if (!files.length) {
//         return console.log(' \033[31m No files to show!\033[39m\n');
//     }

//     function file(i) {
//         var filename = files[i];

//         fs.stat(__dirname + '/' + filename, function(err, stat) {
//             stats[i] = stat;
//             if (stat.isDirectory()) {
//                 console.log(' ' + i + ' \033[36m' + filename + '/\033[39m');
//             } else {
//                 console.log(' ' + i + ' \033[90m' + filename + '\033[39m');
//             }

//             i++;

//             if (i == files.length) {
//                 read();
//             } else {
//                 file(i);
//             }
//         });
//     }

//     function read() {
//         console.log(' ');
//         stdout.write(' \033[33mEnter your choice : \033[39m');
//         stdin.resume();
//         stdin.setEncoding('utf8');
//         stdin.on('data', option);
//     }

//     function option(data) {
//         var filename = files[Number(data)];
//         if (!files[Number(data)]) {
//             stdout.write(' \033[mEnter your choice : \033[39m');
//         } else if (stats[Number(data)].isDirectory()) {
//             fs.readdir(__dirname + '/' + filename, function(err, files) {
//                 console.log(' ');
//                 console.log(' (' + files.length + 'files)');
//                 files.forEach(function(file) {
//                     console.log(' - ' + file);
//                 });
//                 console.log(' ');
//             });
//         } else {
//             stdin.pause();
//             fs.readFile(__dirname + '/' + filename, 'utf8', function(err, data) {
//                 console.log(' ');
//                 console.log('\033[90m' + data.replace(/(.*) /g, ' $1') + '\033[39m');
//             });
//         }
//     }

//     file(0);
// });
