var express = require('express');

var app = express();

// Serve static files
app.use('/', express.static(__dirname + "/"));

// Serve application API
app.get('/api/folios', function(req, res){
	res.send([
		{"id": "1", "name": "Nexus S", "snippet": "Fast just got faster with Nexus S."},
		{"id": "2", "name": "Motorola XOOM™ with Wi-Fi", "snippet": "The Next, Next Generation tablet."},
		{"id": "3", "name": "MOTOROLA XOOM™", "snippet": "The Next, Next Generation tablet."}
	]);
});

app.get('/api/folios/:id', function(req, res){
	// Query the database for that ID and send the response
	res.send(
		{"id": req.params.id, "name": "Test"}
	);
});

app.listen(3000);

console.log("Listening on port 3000...");