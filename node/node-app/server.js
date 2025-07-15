const express = require("express");
const axios = require("axios");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/submit", (req, res) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${process.env.WEATHER_API_KEY}`
    )
    .then((response) => {
      const data = response.data;
      const temp = data.main?.temp;
      const visibility = data.visibility;
      const windspeed = data.wind?.speed;
      const weatherMain = data.weather?.[0]?.main;
      const weatherDesc = data.weather?.[0]?.description;
      
      res.send(`
        <h1>Weather for ${req.body.city}</h1>
        <ul>
          <li><strong>Temperature:</strong> ${temp} K</li>
          <li><strong>Visibility:</strong> ${visibility}</li>
          <li><strong>Wind Speed:</strong> ${windspeed} m/s</li>
          <li><strong>Weather:</strong> ${weatherMain}</li>
          <li><strong>Description:</strong> ${weatherDesc}</li>
          
        </ul>
        <a href="/">Search again</a>
      `);
    })
    .catch((error) => res.status(400).send('ERROR: ' + error.message));
});

app.listen(8000, () => console.log("Server is running on 8000"));








//server.js
// import log from "./logger.js";
// import parseCSV from "./csvtojason.js";

// log.error("This is an Error");
// log.warn("This is a Warning");
// log.success("This is a Success");
// log.info("This is an Information");


//-------------------------------
// const express = require('express')
// const app = express();
// app.get('/', (request, response) => {
//     response.status(200).send("Hello there").end()
// })

// app.get('/home', (request, response) => {
//     response.status(200).header({ "Content-type" : "text/html"}).send("<h1> Hello There from html HOME </h1>").end()
// })
// app.get('/contact', (request, response) => {
//     response.status(200).header({ "Content-type" : "text/html"}).send("<h1> Hello There from CONTACT </h1>").end()
// })
// app.get('/about', (request, response) => {
//     response.status(200).header({ "Content-type" : "text/html"}).send("<h1> Hello There from ABOUT </h1>").end()
// })

// app.listen(8000, () => {
//     console.log("Server is created")
// })





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
