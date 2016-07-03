var express = require("express");
var open = require("open");
var app = express();
var port = process.env.PORT || 3000;

app.get('/',function(req,res){
	res.send("Goto /api/whoami route");
});

app.get('/api/whoami',function(req,res) {
	var headers = req.headers;
	var ip = req.ip.split(':').pop();
	var language = headers["accept-language"].split(';').shift();
	var software = headers["user-agent"].match(/\((.*?)\)/)[1];

	res.json({
		"ipaddress": ip,
		"language":  language,
		"software":  software
	});
});

app.listen(port,function() {
	var url = "http://localhost:"+port;
	console.log("MAGIC HAPPENING @ " + url);
	open(url + "/api/whoami");
});
