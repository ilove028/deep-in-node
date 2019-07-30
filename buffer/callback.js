function syncCb (name, cb) {
  cb(`cb: ${name}`)
}

syncCb('mx', console.info)

console.info('a')

const fs = require('fs')
const util = require('util')


fs.readFile('config', function(err, data1) {
 fs.readFile('data', function (err, data2) {
  console.info(data2)
 })
})

const promiseReadFile = util.promisify(fs.readFile)


promiseReadFile('config')
  .then(data => {
    return promiseReadFile('data')
  })
  .then(console.info)


(async function (config) {
  const configObj = await promiseReadFile(config)
  const data = await promiseReadFile(configObj)
  console.info(data)
})('config')
