const fs = require("fs");
const router = require("express").Router();
const { notes } = require("../db/db.json");
const uniqid = require("uniqid");
// created db variable as the db.json file
const db = JSON.parse(fs.readFileSync("./db/db.json"));

let noteId = uniqid();

console.log(noteId);

// Setup /notes Routes
router.get("/notes", (req, res) => {
  res.send(db);
});

// router.post work.
router.post("/notes", (req, res) => {
  res.json(db);
  //pushes the new note to the db.json file.
  db.push({
    title: req.body.title,
    text: req.body.text,
    //Why is my note ID not pushing to the db???
    noteId: req.body.noteId,
  });
  //writes the newly updated db.json file to the html.
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
});

module.exports = router;
