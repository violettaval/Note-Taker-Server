var database = require("../db/db");

module.exports = function(app) {

  app.get("/api/notes", function (req, res) {
    res.json(database);
  });

  app.post("/api/notes", function (req, res) {
    database.push(req.body);
    console.log(database);
    return res.json(database);
  });

  app.post("/api/notes/:id", function (req, res) {
    var chosen = req.params.id;
    console.log(chosen);
    for (var i = 0; i < database.length; i++) {
      if (chosen === database[i].titles) {
        database.splice(i, 1);
        console.log(database);
      }
    }
    return res.json(database);
  });
  app.post("/api/notes/clearall", function (req, res) {
    database.length = 0;
    return res.json(database);
  });
};