const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
//incorporate uniqid
const uniqid = require("uniqid");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// data parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//changing this to
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
