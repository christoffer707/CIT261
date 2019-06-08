var http = require('http');

function requestType(type) {
	http.request({
	hostname: "eloquentjavascript.net",
	path: "/author",
	method: "GET",
	headers: {Accept: type}
	}, function(response) {
		response.on("data", function(data) {
            console.log(data.toString())
        });
	});
}	

requestType("text/plain");
requestType("text/html");
requestType("application/json");
requestType("application/rainbows+unicorns");