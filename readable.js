var Readable=require('stream').Readable;
var rs= Readable();

var c =97;
rs._read=function(){
	console.log('read....',c++);
	rs.push(String.fromCharCode(c++));
	if(c > 'z'.charCodeAt(0)) rs.push(null);
};

rs.pipe(process.stdout);
