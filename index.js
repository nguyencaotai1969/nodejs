var http = require('http');
var sever = http.createServer(function(req,res){
    console.log("requets of  me "+ req.url);
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hey ninja');
});
sever.listen(3000,'127.0.0.1');
console.log("ok");