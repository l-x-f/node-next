const dns = require('dns')
const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED
}
dns.lookup('baidu.com', options, (err, address, family) =>
  console.log('地址: %j 地址族: IPv%s', address, family)
)
// 地址: "2606:2800:220:1:248:1893:25c8:1946" 地址族: IPv6

// 当 options.all 为 true 时，则结果将会是一个数组。
options.all = true
dns.lookup('baidu.com', options, (err, addresses) =>
  console.log('地址: %j', addresses)
)
// 地址: [{"address":"2606:2800:220:1:248:1893:25c8:1946","family":6}]
