// html routes are to help direct the user
// when they click on a link, the router will understand what the page to give them.

var path = require('path');

module.exports = function (app) {
	// when the user hits tables, I want you to show them tables.
	app.get('/tables', function(req, res) {
		res.sendFile(path.join(__dirname + 
			'/tables.html'));
	});

	app.get('/reserve', function(req, res) {
		res.sendFile(path.join(__dirname + 
			'/reserve.html'));
	});
	// use will set the default homepage rather than get which is based on user selection.
	app.use( function(req, res) {
		res.sendFile(path.join(__dirname + '/index.html'));
	});
}