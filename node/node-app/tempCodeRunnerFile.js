// log.info("This is an Information");

const express = require('express')

const app = express();


app.get('/', (request, response) => {
    response.status(200).send("Hello there").end()
})

app.get('/home', (request, response) => {
    response.status(200).header({ "Content-type" : "text/html"}).send("<h1> Hello There from html </h1>").end()
})
app.get('/contact', (request, response) => {
    response.status(200).header({ "Content-type" : "text/html"}).send("<h1> Hello There from contact </h1>").end()
})
app.get('/about', (request, response) => {
    response.status(200).header({ "Content-type" : "text/html"}).send("<h1> Hello There from about </h1>").end()
})


app.listen(8000, () => {
    console.log("Server is created")
})