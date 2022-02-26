const http = require('http');
const port = 4000;
const server = http.createServer(route);
server.listen(port);
console.log(`Server Run On ${port} number port!`);


function route(request, response){
    if(request.url==='/'){
        response.write("Hello, World! \n");
        response.write("I'm comming \n");
        response.end()
    }
    else if(request.url==="/about"){
        response.write(" We are artamic team!\n");
        response.end();
    }
    else if(request.url==="/bangladesh"){
        response.write(" <h1>Bangladesh</h1>\n");
        response.end();
    }
    else{
        response.write("Not found\n");
        response.end();
    }
}