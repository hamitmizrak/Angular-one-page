// EXPRESS
const express = require("express");

// Application
const app = express();

// Kütüphane import
const mongoose = require("mongoose");

//DotEnv ( DB Güvenliği )
require("dotenv").config();

// Cors 
const cors=require('cors');
app.use(cors())

// Body Parse
const bodyParser = require("body-parser");


// Body parse uygulmayı json yapmalısınız.
app.use(bodyParser.json());

// API IMPORT
// http://localhost:1111/api
const apiDataModule = require("./Api.js");
app.use("/api",apiDataModule)

// DATABASE CONNECT
mongoose
  .connect(
    //1.YOL
    "mongodb+srv://adminadmin:admin123456@mongoangular.hhy6kjy.mongodb.net/?retryWrites=true&w=majority"
    
    // 2.YOL
      // process.env.MONGO_DB_CONNECT,
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // }
  )
  .then(() => {
    console.log("Mongo Db Success");
  })
  .catch((err) => {
    console.log(err);
  });

// Listen
app.listen(1111);
