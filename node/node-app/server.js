
//server.js
// import log from "./logger.js";
// import parseCSV from "./csvtojason.js";

// log.error("This is an Error");
// log.warn("This is a Warning");
// log.success("This is a Success");
// log.info("This is an Information");

const express = require('express')

const app = express();


app.get('/', (request, response) => {
    response.status(200).send("Hello there").end()
})

app.get('/home', (request, response) => {
    response.status(200).header({ "Content-type" : "text/html"}).send("<h1> Hello There from html HOME </h1>").end()
})
app.get('/contact', (request, response) => {
    response.status(200).header({ "Content-type" : "text/html"}).send("<h1> Hello There from CONTACT </h1>").end()
})
app.get('/about', (request, response) => {
    response.status(200).header({ "Content-type" : "text/html"}).send("<h1> Hello There from ABOUT </h1>").end()
})

app.listen(8000, () => {
    console.log("Server is created")
})


// const express = require("express");
// const path = require("path");

// const app = express();

// const student = {
//   name: "Aditya",
//   college: "LPU"
// };

// app.get("/", (req, res) => {
//   res.status(200).header({ "Content-Type": "application/json" }).json(student).end();
// });
// app.get("/about", (req, res) => {
//   res.status(200).header({ "Content-Type": "text/html" }).send("<h1>About</h1>").end();
// });
// app.get("/contact", (req, res) => {
//   res
//     .status(200)
//     .header({ "Content-Type": "text/html" })
//     .sendFile(path.join(__dirname, "contact.html"));
// });

// app.listen(3001, () => console.log("Server is running on 3001"));
