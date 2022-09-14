console.log("Command line Argument Example...");

process.argv.forEach((index, value) => {
  console.log(`${index}: ${value}`);
});

//Output

// PS C:\Users\aman.rathor\Desktop\Training\Nodejs> node cmd-line-args.js
// Command line Argument Example...
// C:\Program Files\nodejs\node.exe: 0
// C:\Users\aman.rathor\Desktop\Training\Nodejs\cmd-line-args.js: 1
