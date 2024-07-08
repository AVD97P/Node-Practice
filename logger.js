const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(msg) {
    console.log(msg);
    this.emit("msgLogged", { id: 1, name: "ABCD" });
  }
}

module.exports = Logger;
