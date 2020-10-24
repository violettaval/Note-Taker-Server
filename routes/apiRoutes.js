var database = require("../db/db.json");
const fs = require("fs");

module.exports = function(app) {

  app.get("/api/notes", function (req, res) {
    res.json(database);
  });

  app.post("/api/notes", function (req, res) {
    database.push(req.body);
    console.log(database);
    fs.writeFileSync("../db/db.json", JSON.stringify(database));
    res.json(req.body);
  });
  
  app.delete("/api/notes/:id", function (req, res) {
    var chosen = req.params.id;
    console.log(chosen);
    for (var i = 0; i < database.length; i++) {
      if (chosen === database[i].id) {
        database.splice(i, 1);
        console.log(database);
        fs.writeFileSync(database, JSON.stringify(database));
        return res.status(200).end();
      }
    }
    res.json();  
  });
  app.post("/api/notes/clearall", function (req, res) {
    database.length = 0;
    res.json();
  });
};