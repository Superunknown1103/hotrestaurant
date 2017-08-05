var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var reservations = [{
  reserve_name: "yoda",
  reserve_phone: "Yoda",
  reserve_email: "Jedi Master",
  reserve_uniqueID: 900
}, {
  reserve_name: "darthmaul",
  reserve_phone: "Darth Maul",
  reserve_email: "Sith Lord",
  reserve_uniqueID: 200
}, {
  reserve_name: "obiwankenobi",
  reserve_phone: "Obi Wan Kenobi",
  reserve_email: "Jedi Master",
  reserve_uniqueID: 55
}];

app.get("/", function(req, res) {
  res.send("Welcome to Hot Restaurant");
});

app.get("/api/:reservations?", function(req, res) {

  var chosen = req.params.reservations;

  if (chosen) {
    console.log(chosen);

    // What does this code do?
    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        return res.json(reservations[i]);
      }
    }

    return res.send("No character found");
  }

  // What does this code do?
  return res.json(reservations);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
