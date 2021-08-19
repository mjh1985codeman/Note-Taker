const fs = require("fs");
const router = require("express").Router();
// const { handleNotesave } = require("../public/assets/js/index");
const uniqid = require("uniqid");
const db = JSON.parse(fs.readFileSync("./db/db.json"));
//get route to pull the existing notes from the db.json file.
router.get("/notes", (req, res) => {
  res.send(db);
});
// router.post work.
router.post("/notes", (req, res) => {
  res.json(db);
});

module.exports = router;
