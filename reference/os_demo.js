const os = require('os');

//Platform
//output: windows is win32
console.log(os.platform());

// CPU Arch
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

// Free memory info
console.log(os.freemem()); 

//Total memory
console.log(os.totalmem());

//Home directory
console.log(os.homedir());

//Uptime
console.log(os.uptime());

//You can be creative and create some applications with those stuffs