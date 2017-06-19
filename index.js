//console.log("here from the node");
var http=require("http");//calling http
var server=http.createServer(function(request,response) {//request gien by client and response from server
	response.writeHead(200);//200 is system code indicationg everything is right
	response.write('hello WLiT');
	response.end();

});
server.listen(8080,function(){//8080 is port no,when 8080 is port no run the above data
	console.log('running on port 8080..')
});