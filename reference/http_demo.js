const http = require('http');

//create a server object
//simple web server
http.createServer((req,res) => {
    //write a response
    res.write('Hello World!');
    res.end();
}).listen(5000,()=> console.log('Server running...'));
