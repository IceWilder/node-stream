const dataSource = ['a', 'b', 'c']
var Readable = require('stream').Readable;
const readable = Readable()
readable._read = function (t) {
	console.log("第%d次调用:",t);
  process.nextTick(() => {
    if (dataSource.length) {
      this.push(dataSource.shift())
    } else {
      this.push(null)
    }
  })
}

readable.pause()
//readable.on('data', data => process.stdout.write('\ndata: ' + data))

readable.on('readable', function () {
  var buffer=readable.read(1);
  if(buffer)
     	return console.log(buffer.toString())
  console.log(buffer)
})