const fs = require("fs");

let data = "Witing data on file ASynchronously..";

fs.writeFile("./demoFile.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File writtten Successfully");
  }
});
