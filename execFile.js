const util = require('util')
const execFile = util.promisify(require('child_process').execFile)

const child = require('child_process').execFile(
  'ls',
  ['-al'],
  (error, stdout, stderr) => {
    if (error) {
      throw error
    }
    console.log(stdout)
  }
)

async function a() {
  const { stdout } = await execFile('./demo.sh', ['word'])
  console.log(stdout)
}

a()
