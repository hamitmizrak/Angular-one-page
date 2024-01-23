// Kütüphane çağır
/*
    id:number=0;
    username:string="";
    email:string="";
    password:string="";
    created_date:string="";
*/

// EXPRESS
const express = require("express");

// ROUTER
const router = express.Router();

// IMPORT DATABASE
const Database = require("./MongoDbNodeJs.js");


/////////////////////////////////////////////////////////////

// GET (ROOT)
// http://localhost:1111/user
router.get("/", (request, response) => {
  console.log(request.body);
  response.send("ROOT NODE JS EXPRESS REST API ");
}); // end GET

/////////////////////////////////////////////////////////////

// POST (CREATE)
router.post("/register", (request, response) => {
  console.log(request.body);
  response.send("USER CREATE ");

  const databaseContent = new Database({
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  }).save()
    .then((temp) => {
      response.json(temp);
    })
    .catch((err) => {
      response.json(err);
    });
}); // end GET

/////////////////////////////////////////////////////////////
// GET (LIST)
// http://localhost:1111/user
router.get("/register", async(request, response) => {
    console.log(request.body);
    response.send("USER LIST ");
    try {
        const list= await Database.find();
        response.json(list);
    } catch (err) {
        response.json(err);
    }
  }); // end GET

// Module
module.exports = router;
