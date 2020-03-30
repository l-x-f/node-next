const express = require('express')
const fs = require('fs')
const path = require('path')
const resolve = p => path.join(__dirname, p)
const multiparty = require('multiparty')
const router = express.Router()

const getUsersList = function(req, res) {
  const form = new multiparty.Form()
  form.parse(req, function(err, fields, file) {
    console.log('fields', fields)
    console.log('fields', JSON.parse(fields.other))
    console.log('file', file)

    const fileP =fs.readFileSync(file.file[0].path)

    console.log('fileP',fileP)

    fs.writeFileSync(resolve('./aaaa.jpeg'),fileP)

    res.send('数据已接收')
  })
}

router.post('/users', getUsersList)

module.exports = app => {
  app.use(router)
}
