const fs = require('fs')

const convert = path => {
  const json = JSON.parse(fs.readFileSync(path))
}

convert('src/std.json')
