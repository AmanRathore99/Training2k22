const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  //   res.write("<h1>Welcome from Express!</h1>");
  //   res.write("<h3>Fast, unopinionated, minimalist web framework</h3>");

  var fileName = "./public/future_value/index.html";
  res.sendFile(path.join(__dirname, fileName));
});

app.get("/api", (req, res) => {
  res.write("<h1>APIs</h1>");
  res.write(
    "<p> With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy</p>"
  );
});

app.get("/performance", (req, res) => {
  res.write("<h1>Performance</h1>");
  res.write(
    "<p> Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.</p>"
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
