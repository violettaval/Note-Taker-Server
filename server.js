var express = require("express");
var app = express();
var database = require("./db/db.json");
const fs = require("fs");
var index = 0; //makes id's
var PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/notes", function (req, res) {
  res.json(database);
});

app.post("/api/notes", function (req, res) {
  req.body.id = index;
  index++;
  database.push(req.body);
  console.log(database);
  fs.writeFileSync("./db/db.json", JSON.stringify(database));
  res.json(req.body);
});

app.delete("/api/notes/:id", function (req, res) {
  var chosen = parseInt(req.params.id);
  console.log(chosen);
  for (var i = 0; i < database.length; i++) {
    if (chosen === database[i].id) {
      database.splice(i, 1);
      console.log(database);
      fs.writeFileSync("./db/db.json", JSON.stringify(database));
      return res.status(200).end();
    }
  }
  res.json();  
});

require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
