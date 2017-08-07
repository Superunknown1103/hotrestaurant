// api-routes will give the user the information that they should be seeing.
var tableData = require('./table-data.js');
var waitingListData = require ('./waitingList-data.js');

module.exports = function (app) {
	app.get('/api/tables', function (req, res){
		res.json(tableData);
	});

	app.get('/api/waitlist', function (req, res) {
		res.json(waitingListData);
	});
}