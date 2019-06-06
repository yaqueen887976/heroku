
const http = require('http');
const path = require('path');
const fs = require('fs');

//load file to browser
const server = http.createServer((req,res) => {
    

    // Want to make the file path dynamic
    //Build file path
    // the third parameter is dynamic url, if the request url is '/', then it shows begin.html, else it show req.url
    let filePath = path.join(__dirname,'public',req.url === '/' ?
    'mainPage.html' : req.url);
    
    //get extension of the file
    let exname = path.extname(filePath);

    //set content type
    let contentType = 'text/html';

    //check extension and set content type
    //those are basically all the file types we want to handle for the server
    switch(exname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'img/png';
            break;
        case '.jpg':
            contentType = 'img/jpg';
            break;
    }

    //Read file
    fs.readFile(filePath,(err,content) => {
        if(err){
            if (err.code == 'ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err, content) => {
                    //send 200 response
                    res.writeHead(200,{'Content-Type': 'text/html'});
                    //send content
                    res.end(content,'utf8');
                })
            }else{
                //if it have a different error, then it gonna be server error: 500 error
                res.writeHead(500);
                res.end('Server Error '+err.code);
            }
        }
        if (req.url=='mainPage.html?'){
            //if the url is /mainPage.html, want to load a html file by load other page
            //can use fs module
            fs.readFile(path.join(__dirname,'public','mainPage.html?'),(err,content)=>{
                //add content type so that it shows html
                if (err) throw err;
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end(content);
                //res.end('<h1> Home </h1>');
            })
        }
        //if there is no error
        else{//successful response
            res.writeHead(200,{'Content-Type': contentType});
            res.end(content,'utf8');
            
        }
    });

});

//set port to PORT variable
//run whatever host is going decide which called environment variable or port 5000
//first look for env if not found, run 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT,() => console.log('Server Running on Port '+PORT));

