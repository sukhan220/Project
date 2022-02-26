const http = require('http');

const server = http.createServer((request, response)=>{
    response.write("Hello World\n");
    response.write("How are you\n");
    response.end();
});
// server.on('connection',()=> {
//     console.log("New Connection Create .... ");
// })

server.listen(3000);
console.log("Server run on 3000 number port");