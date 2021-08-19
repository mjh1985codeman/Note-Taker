const fs = require("fs");
const router = require("express").Router();
// const { handleNoteSave } = require("../public/assets/js/index");
const uniqid = require("uniqid");
const db = JSON.parse(fs.readFileSync("./db/db.json"));
//get route to pull the existing notes from the db.json file.
router.get("/notes", (req, res) => {
  res.send(db);
});
// router.post work.
router.post("/notes", (req, res) => {
  res.json(db);
  //pushes the new note to the db.json file.
  db.push({ title: req.body.title, text: req.body.text });
  //writes the newly updated db.json file to the html.
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
});

module.exports = router;
