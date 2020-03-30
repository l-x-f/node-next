const path = require('path')
const a = path.resolve('./upload-file/server/index.js', './a.s')

console.log(a)

var myFilePath = '/someDir/someFile.json'

console.log(path.parse(myFilePath))
