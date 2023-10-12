// const {sayHello} = require ('./folder/sayHello')
// sayHello ()


// console.log('dirname', __dirname);
// console.log('filename', __filename);
// console.log('process cwd',  process.cwd());

const path = require ('node:path')

const joinPath = path.join(__dirname, 'folder', 'sayHello.js')
console.log(joinPath);

const normalizePath = path.normalize('///')