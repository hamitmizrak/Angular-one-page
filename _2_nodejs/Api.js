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

// http://localhost:1111/api/register
// GET
router.get("/register", (request, response) => {
  //response.setHeader("Content-Type", "application/json")
  console.log(request.body);
  response.send("API GET ROOT 44 ");
}); //end GET (Veri Çağır)


// http://localhost:1111/api/register
// POST (Veri Gönder)
router.post("/register", (request, response) => {
  //response.setHeader("Content-Type", "application/json")
  console.log(request.body);

  const databaseSend = new Database({
    //username email
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  }); //end databaseSend

  // Database Send
  databaseSend
    .save()
    .then((temp) => {
      response.json(temp);
    })
    .catch((err) => {
      response.json(err);
    });
}); //end POST (Veri Gönder)

// LIST
// http://localhost:1111/api/register/list
router.get("/register/list", async (request, response) => {
    //response.setHeader("Content-Type", "application/json")
    console.log(request.body);
    try {
      const find = await Database.find();
      response.json(find);
    } catch (err) {
      response.json({ message: err });
    }
  }); //end GET (Veri Çağır) Find

// FIND
// http://localhost:1111/api/register/65a956ae64fbfb2339da65b0
router.get("/register/:registerID", async (request, response) => {
  //response.setHeader("Content-Type", "application/json")
  console.log(request.body);
  try {
    // find
    const find = await Database.findById(request.params.registerID);
    response.json(find);
  } catch (err) {
    response.json({ message: err });
  }
}); //end GET (Veri Çağır) Find
 
// UPDATE patch: Bir kısmını güncelle
// http://localhost:1111/api/register/65a956ae64fbfb2339da65b0
//router.patch("/register/:registerID", async (request, response) => {
router.patch("/register/patch/:registerID", async (request, response) => {
  //response.setHeader("Content-Type", "application/json")
  console.log(request.body);
  try {
    const update = await Database.updateOne(
      { _id: request.params.registerID },
      {
        $set: { username: request.body.username },
      }
    ); //end updateOne
    response.json(update);
  } catch (err) {
    response.json({ message: err });
  }
}); //end UPDATE (Veri Güncelle)

// UPDATE VEYA PATCH YAPABİLİRSİN
// http://localhost:1111/api/register/65a956ae64fbfb2339da65b0
//router.patch("/register/:registerID", async (request, response) => {
router.put("/register/:registerID", async (request, response) => {
  //response.setHeader("Content-Type", "application/json")
  console.log(request.body);
  try {
    const update = await Database.findByIdAndUpdate( { _id: request.params.registerID }, request.body);
    update.save()
    response.json(update);
  } catch (err) {
    response.json({ message: err });
  }
}); //end UPDATE (Veri Güncelle)


// DELETE
// http://localhost:1111/api/register/65a956ae64fbfb2339da65b0
router.delete("/register/:registerID", async (request, response) => {
    //response.setHeader("Content-Type", "application/json")
    console.log(request.body);
    try {
      const find = await Database.findById(request.params.registerID);
      response.json(find);
      const deleteData= await Database.deleteOne(find);
    } catch (err) {
      response.json({ message: err });
      response.sendStatus(404)
    }
  }); //end Delete (Veri Sil) 

/////////////////////////////////////////////////////////////
// Module
module.exports = router;
