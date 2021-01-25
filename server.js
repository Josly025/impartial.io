const express = require("express");
var path = require("path");
const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// viewed at http://localhost:8080
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//Start listening at localhost:3000
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}!!!`);
});
