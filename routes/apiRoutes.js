const fs = require("fs");
const router = require("express").Router();
const uniqid = require("uniqid");
const db = JSON.parse(fs.readFileSync("./db/db.json"));

router.get("/notes", (req, res) => {
  res.send(db);
});

module.exports = router;
