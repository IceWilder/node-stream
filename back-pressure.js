const stream = require('stream')

var c = 0
const readable = stream.Readable({
  highWaterMark: 6,
  read: function () {
    process.nextTick(() => {
      var data = c < 20 ? String.fromCharCode(c + 65) : null
      console.log('push', ++c, data)
      this.push(data)
    })
  }
})

const writable = stream.Writable({
  highWaterMark: 6,
  write: function (chunk, enc, next) {
    next();
    console.log('write', chunk)
  }
})

readable.pipe(writable)