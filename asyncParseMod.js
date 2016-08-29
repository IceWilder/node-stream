const dataSource = ['a', 'b', 'c']
var Readable = require('stream').Readable;
const readable = Readable()
var t=0,j=0,k=0;
readable._read = function () {
	console.log("第%d次调用:",t++);
  process.nextTick(() => {
    if (dataSource.length) {
      console.log("第%d次循环",k++);
      this.push(dataSource.shift())
    } else {
      this.push(null)
    }
  })
}

readable.pause()
readable.on('data', data => process.stdout.write('\ndata: ' + data))

readable.on('readable', function () {
  var buffer=readable.read();

	console.log("第%d次监听:",j++);
  if(buffer)
     	return console.log(buffer.toString())
  console.log(buffer)
})
