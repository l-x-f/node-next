var child_process = require('child_process')

var path = '.'
var ls = child_process.spawn('/bin/ls', ['-l', path])
ls.stdout.on('data', function(data) {
  console.log('stdout: ' + data)
})

ls.stderr.on('data', function(data) {
  console.log('stderr: ' + data)
})

ls.on('close', function(code) {
  console.log('child process exited with code ' + code)
})
