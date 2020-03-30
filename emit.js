const Radio = require('./eventEmitter')

const radio = new Radio('100')

console.log(new Radio('100'))
radio.on('open', data => {
  console.log(data)
})
radio.on('close', data => {
  console.log(data)
})

radio.emit('newListener', 200)
