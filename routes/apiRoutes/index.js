const router = require("express").Router();
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  res.json("Do You see Me? " + notes);
});

module.exports = router;
