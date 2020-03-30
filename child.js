process.send({ foo: '你好世界' })

process.on('message', function(m) {
  console.log('c:', m)
})
