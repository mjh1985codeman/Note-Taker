const express = require("express");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));

// // Use apiRoutes
// app.use("/api", apiRoutes);
// // use htmlRoutes
// app.use("/", htmlRoutes);

app.use(apiRoutes);

app.get("/", (req, res) => {
  res.json({
    config: "Success",
  });
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
