var http = require('http')
var cluster = require('cluster')
var os = require('os')

if (cluster.isMaster) {
  for (var i = 0, n = os.cpus().length; i < n; i += 1) {
    const worker=   cluster.fork()
    console.log(worker)
  }
} else {
  http
    .createServer(function(req, res) {
      res.writeHead(200)
      res.end('hello world\n')
    })
    .listen(8000)
}
