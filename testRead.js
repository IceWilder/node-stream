const fs = require('fs');
var readable = fs.createReadStream('test.txt');
readable.on('readable', (chunk) => {
	var buffer=readable.read(200);
	if(buffer)
	 return console.log("-->length:%d",buffer.length);
	console.log(buffer)
});
readable.on('end', () => {
  console.log('end');
});