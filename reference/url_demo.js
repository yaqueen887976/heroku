const url = require('url');

//instantiate new url object

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');
console.log(myUrl.href);

console.log(myUrl.toString());

// get the host (root domain) which is mywebsite.com
console.log(myUrl.host);

//get the host name, but host name doesn't get the port if the website is:
//'http://mywebsite.com:8000/hello.html?id=100&status=active'
console.log(myUrl.hostname);

//pathname
//shows /hello.html
console.log(myUrl.pathname);

//serialized query
//gives everything after question mark id=100&status=active
console.log(myUrl.search);

//Params object
//get: {'id' => '100', 'status' => 'active'}
console.log(myUrl.searchParams);

//Add param
//get: {'id' => '100', 'status' => 'active', 'abc' => '123'}
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

//Loop through params
/*
id: 100
status: active
abc: 123
*/
myUrl.searchParams.forEach((value,name)=>console.log(name+': '+value));

