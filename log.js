const EventEmitter = require("events");

const Logger = require("./logger"); // import logger.js file to use Logger Class
const logObj = new Logger();

logObj.on("msgLogged", (e) => {
  console.log("Listener Called", e);
});

logObj.log("Hello message!");
