const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/ecom")
  .then(() => console.log("Mongodb is connected"))
  .catch((err) => console.log("Mongodb erroe: ", err));
