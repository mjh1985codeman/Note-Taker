const router = require("express").Router();

router.get("/test", (req, res) => {
  res.json({
    name: "Hello There",
  });
});

module.exports = router;
