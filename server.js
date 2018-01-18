const express = require('express');
const fs = require('fs');
const   app     = express();

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
	// and remove caching so we get the most recent comment
	res.setHeader('Cache-Control', 'no-cache');
	next();
})
// picture list api
app.get('/api/pictures', function(req, res) {
    var files = fs.readdirSync("./public/img/");
    files = files.map((file) => {
        return {name: file}
    })
    res.send(files);
});

// CONNECT TO PORT
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Server is now running on port:", port);
});