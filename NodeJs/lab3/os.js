const os = require("os");

//The platform on which Node.js is compiled
const compilePlatform = os.platform();
console.log(compilePlatform);

// The hostname
const hostName = os.hostname();
console.log(hostName);

//  The Operating System release number
const releaseNumber = os.release();
console.log(releaseNumber);

// Total memory
const totalMemory = os.totalmem();
console.log(totalMemory);

// Free memory
const freeMemory = os.freemem();
console.log(freeMemory);

// Number of Cpu's
const numCpus = os.cpus();
console.log(numCpus.length);

// Model of cpu's
console.log(numCpus[0].model);

// speed of cpus
console.log(numCpus[0].speed);
