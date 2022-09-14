const path = require("path");

// Get directory name
const fileName =
  "C:\\Users\\aman.rathor\\Desktop\\Training\\NodeJs\\demoFile.txt";

const dirName = path.dirname(fileName);
console.log(dirName);

// Get file Name
const file = path.basename(fileName);
console.log(file);

// Get extension name

const extName = path.extname(fileName);
console.log(extName);
