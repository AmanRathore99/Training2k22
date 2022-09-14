const fs = require("fs");

let data = "Witing data on file Synchronously..";

fs.writeFileSync("./demoFile.txt", data);
console.log(data);
