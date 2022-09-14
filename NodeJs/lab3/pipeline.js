// const { pipeline } = require("stream");
// const fs = require("fs");

// pipeline(
//   fs.createReadStream("./demoFile.txt"),
//   fs.createWriteStream("./demoFile1.txt"),
//   (err) => {
//     if (err) {
//       console.log("Pipeline failed ", err);
//     } else {
//       console.log("pipeline success");
//     }
//   }
// );

var fs = require("fs");

var readable = fs.createReadStream("./demoFile.txt");

var writable = fs.createWriteStream("demoFile1.txt");
var writable1 = fs.createWriteStream("demoFile2.txt");

readable.pipe(writable);
readable.pipe(writable1);

console.log("Program Ended");
