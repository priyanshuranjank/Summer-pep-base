const express = require("express");
const app = express();
require("./db");

const productRouter = require("./routes/product.route");
const userRouter = require("./routes/user.route");

app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3001, () => console.log("Server is live at 3001 port!"));