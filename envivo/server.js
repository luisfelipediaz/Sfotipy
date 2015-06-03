var http = require("http"),
	st   = require("node-static"),
	opts = { cache: false },
	file = new st.Server('./', opts),
	port = process.env.PORT || 8080;
//4347-15-0002006722
http.createServer(function(req, res){
	file.serve(req, res);
}).listen(port);

console.log("App running on http://localhost:%s", port)
