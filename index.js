var express = require("express");
var products = require("./routes/products");
var users = require("./routes/users");

var app = express();

var mongoose = require("mongoose");
var dbURL = require("./properties").DB_URL;


mongoose.connect(dbURL);


mongoose.connection.on("connected", ()=> {
    console.log("Connected to MongoDB using MongooseJS");
})



app.use("/products", products);
app.use("/users", users);

app.listen(3000);




