// const fs = require('fs')

// const stream = fs.createReadStream("./index.txt",{
//   encoding: "utf-8"
// });

// stream.on("data", (chunks)=> {
//   console.log("Reading stream...", chunks);
  
// });





const fs = require('fs');
const http = require("http");

const server = http.createServer((req,res) => {
  console.log("Server is available");
  console.log(req.url);

  const htmlData = fs.readFileSync("index.html", {encoding: "utf-8"})
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(htmlData);
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});








// const eventEmitter = require('events');
// // const { register } = require('module');
// const event = new eventEmitter.EventEmitter();

// // event.on("greet", ()=> {
// //     console.log("hello from greet")
// // })

// // console.log("Hello there")

// // event.emit("greet")


// register = () => {
//     console.log("Registration started...")
//     event.emit("register")
// }

// event.on("register", ()=> {
//     console.log("registration done successfully..")
//     event.emit("email")
// })


// event.on("email", ()=> {
//     console.log("email sent successfully...")
// })

// register()