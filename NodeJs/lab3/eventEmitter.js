const events = require("events");

const ee = new events.EventEmitter();

const startCar = () => {
  console.log("Start the Car");
};

const selectGear = () => {
  console.log("Select Your Gear");
};

const releaseBreak = () => {
  console.log("Release the Parking Brake");
};

const carMotion = () => {
  console.log("Set a Car in Motion.");
};
const neutralGear = () => {
  console.log("Use the Neutral Gear.");
};
const lowerGears = () => {
  console.log("Using Lower Gears.");
};
const stopCar = () => {
  console.log("Stop a Car.");
};

ee.on("Step1", startCar);
ee.on("Step2", selectGear);
ee.on("Step3", releaseBreak);
ee.on("Step4", carMotion);
ee.on("Step5", neutralGear);
ee.on("Step6", lowerGears);
ee.on("Step7", stopCar);

ee.emit("Step1");
ee.emit("Step2");
ee.emit("Step3");
ee.emit("Step4");
ee.emit("Step5");
ee.emit("Step6");
ee.emit("Step7");
