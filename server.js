const express = require("express");
const PORT = process.env.PORT || 3001;

const apiRoutes = require("./routes/apiRoutes");

const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
