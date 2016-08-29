const dataSource = ['a', 'b', 'c']
var Readable = require('stream').Readable;
const readable = Readable()
var t=0;
var j=0;
readable._read = function () {
	console.log("第%d次调用:",t++);
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
	console.log("第%d次监听:",j++);
  var buffer=readable.read(1);
  if(buffer)
     	return console.log(buffer.toString())
  console.log(buffer)
})