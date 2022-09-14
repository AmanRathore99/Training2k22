let fs = require("fs"),
  reader = fs.createReadStream("demoFile.txt");

reader.on("data", (chunk) => {
  console.log(chunk.toString());

  // count vowels

  const vowels = /[aeiou]/gi;
  let result = chunk.toString().match(vowels);
  let count = result.length;
  console.log(count);

  // Percentage of vowels
  const strLen = chunk.toString().replace(/ /g, "").length;
  const vowelPercentage = strLen / count;
  console.log(vowelPercentage);
});
