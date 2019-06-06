const path = require('path');

//Base file name
console.log(__filename);
//C:\Users\Thinkpad\Desktop\NodeJS\reference\path_demo.js
//it give us entile path of the file name in the end

console.log(path.basename(__filename));
//path_demo.js
//it just get the file name

//Directory name, it give us just the directory
//C:\Users\Thinkpad\Desktop\NodeJS\reference
console.log(path.dirname(__filename));

//get the extension
//return .js
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));
/*
{ root: 'C:\\',
  dir: 'C:\\Users\\Thinkpad\\Desktop\\NodeJS\\reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo' }
  */

//concatenate path
//../test/hello.html
console.log(path.join(__dirname,'test','hello.html'));
//this created a new director called test and create a hello.html file
//returned C:\Users\Thinkpad\Desktop\NodeJS\reference\test\hello.html
