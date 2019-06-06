const fs = require('fs');
const path = require('path');

//create a folder
//by defaut, those are asynchronous, which means it takes a callback
//it also have synchronous version
//add a folder called test

//this is version #1
/*
fs.makedir(path.join(__dirname,'/test'),{},function(err){
	if(err) throw err;
	console.log('Folder created..');
}); 
*/

/*fs.mkdir(path.join(__dirname,'/test'),{},err =>{
	if(err) throw err;
	console.log('Folder created..');
});*/	

//Create and write to file
//'Hello World' is the content you want to write

/*
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello, World',err =>{
	if(err) throw err;
	console.log('File written to...');

	//file append
	fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I love nodejs',err =>{
	if(err) throw err;
	console.log('File written to...');
	});
});
*/


// Read File
/*
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',function(err,data){
	if(err) throw err;
	console.log(data);
}); 
*/

// Rename file
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),(err) =>{
	if(err) throw err;
	console.log('File renamed');
}); 