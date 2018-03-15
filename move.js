const fs = require('fs')
const path = require('path')

const rootPath = path.join(process.cwd(), 'source/_posts')
const reg = /tags:(.*)/
const { readdirSync, statSync, readFileSync, existsSync, mkdirSync, renameSync } = fs

function moveFunc(handlePath) {
    const files = readdirSync(handlePath)

    for (let file of files) {
        const currentPath = path.join(handlePath, file)
        const stat = statSync(currentPath)

        if (stat.isDirectory()) {
            moveFunc(currentPath)
        } else {
            if (file.endsWith('.md')) {
                const data = readFileSync(currentPath, 'utf8')
                const execTag = reg.exec(data)
                const fileName = execTag && execTag[1]

                if (fileName) {
                    const targetPath = path.join(rootPath, fileName.trim())
                    if (!existsSync(targetPath)) {
                        mkdirSync(targetPath)
                    }

                    renameSync(currentPath, path.join(targetPath, file))
                } else {
                    renameSync(currentPath, rootPath)
                }
            } else {
                // renameSync(currentPath, rootPath)
            }
        }
    }
}


moveFunc(rootPath)
// deleteFunc(rootPath)


function deleteFunc(handlePath) {
    const files = readdirSync(handlePath)
    for (let file of files) {
        const currentPath = path.join(handlePath, file)
        const stat = statSync(currentPath)

        if (stat.isDirectory()) {

        }
    }
}

function deleteall(path) {
    var files = []
    if(fs.existsSync(path)) {
        files = fs.readdirSync(path)
        files.forEach(function(file, index) {
            var curPath = path + "/" + file
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteall(curPath)
            } else { // delete file
                fs.unlinkSync(curPath)
            }
        })
        fs.rmdirSync(path)
    }
};

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