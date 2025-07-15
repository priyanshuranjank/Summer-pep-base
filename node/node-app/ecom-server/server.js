
const express = require("express")

const userController = require("./controller/user.controller");
const prodController = require("./controller/product.controller")
const app = express();
require("./db/index")

app.use(express.json());

app.use("/users",userController);
app.use("/products",prodController);

app.listen(3001, ()=> console.log("Server is live at 3001 post!"));