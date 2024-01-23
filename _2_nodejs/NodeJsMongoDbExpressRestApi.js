// EXPRESS
const express = require("express");

// Kütüphane import
const mongoose = require("mongoose");

//DotEnv (DB Güvenliği)
require("dotenv").config();

// Body Parse
const bodyParser = require("body-parser");

// Application
const app = express();

// Body parse uygulmayı json yapmalısınız.
app.use(bodyParser.json());

// API IMPORT
const apiDataModule = require("./Api.js");
app.use("/user", apiDataModule);

// DATABASE CONNECT
mongoose
  .connect(
    //1.YOL
    "mongodb+srv://adminadmin:admin123456@mongoangular.hhy6kjy.mongodb.net/?retryWrites=true&w=majority"
    // 2.YOL
    //   process.env.MONGO_DB_CONNECT,
    //   {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   }
  )
  .then(() => {
    console.log("Mongo Db Success");
  })
  .catch((err) => {
    console.log(err);
  });

// Listen
app.listen(1111);
