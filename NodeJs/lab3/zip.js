const zlib = require("zlib");
const gzip = zlib.createGzip();
const fs = require("fs");
const inp = fs.createReadStream("demoFile.txt");
const out = fs.createWriteStream("demoFile.txt.gz");
inp.pipe(gzip).pipe(out);
