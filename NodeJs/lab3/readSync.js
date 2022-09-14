const fs = require("fs");

const data = fs.readFileSync("./demoFile.txt", { encoding: "utf-8" });
console.log(data);
