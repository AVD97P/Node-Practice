//Practice code only for "http" FUnction on Node.js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req === "/") {
    res.write("Hello Avd!");
    res.end();
  }
  if (req === "/api") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);
console.log("Listening on server 3000 ...");
