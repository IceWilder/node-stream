   const dataSource = ['a', 'b', 'c']
var Readable = require('stream').Readable;
const readable = Readable()
var t=0;
var j=0;
readable._read = function () {
	console.log("第%d次调用:",t++);
	//异步会是Null
	// process.nextTick(() => {
  //   if (dataSource.length) {
  //   	console.log("第%d次循环:",j++);
  //     this.push(dataSource.shift())
  //   } else {
  //     this.push(null)
  //   }
  // })
   if (dataSource.length) {
    	console.log("第%d次循环:",j++);
      this.push(dataSource.shift())
    } else {
      this.push(null)
    }
}

readable.pause()
readable.on('data', data => process.stdout.write('\ndata: ' + data))
var buffer=1;
 while(buffer){

 	 buffer=readable.read();
 	if(buffer){
		console.log('buffer:',buffer.toString());
 	}else{
 		console.log(buffer);
 	}
 }
