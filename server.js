const express = require("express");
const app = express();
const unitRoutes = require("./routes/unitRoutes");
const banco = require("./dbConfig");
app.use(express.json());

app.use("/public", express.static("./public"));
app.use("/unit", unitRoutes);

function connectarBanco() {
  banco.connect(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

app.listen(3000, connectarBanco);
