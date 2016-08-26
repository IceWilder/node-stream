const fs = require('fs');
var readable = fs.createReadStream('test.txt');
readable.on('data', (chunk) => {
	console.log('data',chunk);
  console.log('got %d bytes of data', chunk.length);
  readable.pause();
  console.log('there will be no more data for 1 second');
  setTimeout(() => {
    console.log('now data will start flowing again');
    readable.resume();
  }, 1000);
});
readable.on('end', () => {
  console.log('end');
});