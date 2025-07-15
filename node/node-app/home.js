//weather.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather Application</title>
    <style>
      * {
        margin: 0px;
        padding: 0px;
        font-family: "Courier New", Courier, monospace;
      }

      body {
        display: flex;
        height: 100vh;
        gap: 10px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: aliceblue;
      }

      h1 {
        font-size: 48px;
      }

      ul {
        padding: 0px;
        margin: 0px;
      }

      li {
        font-size: 18px;
      }

      li > span {
        font-size: 20px;
        font-weight: 550;
      }
      a {
        color: white;
        font-size: 16px;
        border-radius: 5px;
        padding: 10px 15px;
        text-decoration: none;
        background-color: orange;
      }
    </style>
  </head>
  <body>
    <h1>Weather of {{{cityName}}}</h1>
    <ul>
      <li><span>Type:</span> {{{type}}}</li>
      <li><span>Description:</span> {{{description}}}</li>
      <li><span>Tempreture(</span>in F): {{{temprature}}}</li>
      <li><span>Visibility:</span> {{{visibility}}}</li>
      <li><span>Wind </span>Speed: {{{speed}}}</li>
    </ul>
    <a href="/">Go Back</a>
  </body>
</html>


//server.js


const express = require("express");
const axios = require("axios");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "/index.html"));
});

app.post("/submit", (req, res) => {
  console.log("Body: ", req.body);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${process.env.WEATHER_API_KEY}`
    )
    .then((response) => {
      const weather = {
        cityName: response.data.name,
        type: response.data.weather[0].main,
        description: response.data.weather[0].description,
        temprature: response.data.main.temp,
        visibility: response.data.visibility,
        speed: response.data.wind.speed
      };
      const data = fs.readFileSync(path.join(__dirname, "/public", "/weather.html"), {
        encoding: "utf-8"
      });
      let html = data
        .replace("{{{cityName}}}", weather.cityName)
        .replace("{{{type}}}", weather.type)
        .replace("{{{description}}}", weather.description)
        .replace("{{{temprature}}}", weather.temprature)
        .replace("{{{visibility}}}", weather.visibility)
        .replace("{{{speed}}}", weather.speed);
      res.status(200).send(html);
    })
    .catch((error) => res.status(400).send(`Error: ${error.message}`));
});
app.listen(3001, () => console.log("Server is running on 3001"));


//index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather Application</title>
    <style>
      * {
        margin: 0px;
        padding: 0px;
        font-family: "Courier New", Courier, monospace;
      }

      body {
        display: flex;
        height: 100vh;
        gap: 10px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: aliceblue;
      }

      h1 {
        font-size: 48px;
      }

      label {
        font-size: 20px;
        font-weight: 550;
      }

      input {
        padding: 5px 10px;
        font-size: 16px;
      }

      button {
        border: none;
        font-size: 16px;
        border-radius: 5px;
        padding: 10px 15px;
        background-color: orange;
      }
    </style>
  </head>
  <body>
    <h1>Weather APP</h1>

    <form method="post" action="/submit">
      <label>City Name:</label>
      <input name="city" placeholder="Jalandhar" type="text" />
      <button>Submit</button>
    </form>
  </body>
</html>
