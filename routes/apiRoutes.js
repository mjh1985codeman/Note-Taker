const fs = require("fs");
const router = require("express").Router();
const uniqid = require("uniqid");
// created db variable as the db.json file

// console.log(noteId);

// Setup /notes Routes
router.get("/notes", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db/db.json"));
  res.send(db);
});

// router.post work.
router.post("/notes", (req, res) => {
  let noteId = uniqid();
  const db = JSON.parse(fs.readFileSync("./db/db.json"));
  res.json(db);
  //pushes the new note to the db.json file.
  db.push({
    title: req.body.title,
    text: req.body.text,
    id: noteId,
  });
  //writes the newly updated db.json file to the html.
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
});

//Delete route.
router.delete("/notes/:id", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db/db.json"));
  res.json(db);
  //assigns the id of the note that is being deleted to a variable.
  const deletedNoteId = req.params.id;

  //THIS ONE WORKED TO DELETE THE SPECIFIC NOTE!!!
  //Checking each notes Id's and only keepting the ones whose Id's do NOT match the deletedNoteId.
  const newDb = db.filter((noteEl) => noteEl.id !== deletedNoteId);
  // console.log("deletedNoteId: " + deletedNoteId);

  //Writing the newDb to the JSON file.
  fs.writeFileSync("./db/db.json", JSON.stringify(newDb));
});

module.exports = router;
