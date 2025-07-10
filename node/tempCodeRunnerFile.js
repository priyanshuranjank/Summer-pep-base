

const http = require("http");

const server = http.createServer((req,res) => {
  console.log("Server is available");
  console.log(req.url);
  
  const htmlData = fs.readFileSync("index.html", {encoding: "utf-8"})
  res.writeHead(200 {"Content-Type": "text/html"});
  res.end(htmlData);
});
