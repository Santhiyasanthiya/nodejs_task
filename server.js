


const express = require("express")
const cors = require("cors")
const app = express();
const mongodb = require("mongodb")
const dotenv = require("dotenv").config()
const mongoClient = mongodb.MongoClient;
// const URL = "mongodb+srv://santhiya:santhiya2525@cluster0.mejii.mongodb.net/?retryWrites=true&w=majority"
const URL = process.env.DB;
const DB = "batch_37_wd_Tamil";

let users = [];

// console.log(process)

//middle ware
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3001"
}))


app.get("/show", async function (req, res) {

    // let queryParams = req.query
    // console.log(queryParams);

    // let resUser = []

    // for(let index = parseInt(req.query.offset); index < parseInt(req.query.offset) + parseInt(req.query.limit); index ++){
    //     if(users[index]){
    //         resUser. push(users[index])
    //     }
    // }

    try {
  //  step 1: Create a conncetion between Nodejs and mongoDb 
        const Connection = await mongoClient.connect(URL) //Node js la eruinthu data base point pannthu

 //Step 2: Select the DB
        const db = Connection.db(DB)

  //Step 3 :Select the collection 
  //Step 4 : Do the operation (Create, Update, Read, Delete)

        let resUser = await db.collection("users").find().toArray()
 //Step 5  : Close the connection 
        await Connection.close()

        res.json(resUser);

    } catch (error) {
        console.log(error)
 //if any error throw error use for try atch method 
        res.status(500).json({ message: "Somthing went wrong" })
    }


});

app.post("/user", async function (req, res) {
    //  MONGODB:-  There are 5 steps having

    try {

  //  step 1: Create a conncetion between Nodejs and mongoDb 
        const Connection = await mongoClient.connect(URL) //Node js la eruinthu data base point pannthu

  //Step 2: Select the DB
        const db = Connection.db(DB)
  //Step 3 :Select the collection 
  //Step 4 : Do the operation (Create, Update, Read, Delete)
          await db.collection("users").insertOne(req.body)
  //Step 5  : Close the connection 
        await Connection.close()
        res.json({ message: "Data inserted" })

    } catch (error) {
        console.log(error)
  //if any error throw error use for try atch method 
        res.status(500).json({ message: "Somthing went wrong" })
    }
});
//-----------------------------------------------------------------------------------------------------------
//particular onnu mattum show aaganumna enna pannanum

app.get("/user/:id", async function (req, res) {
    // let takeId = req.params.id
    // let getId = users.find((item) => item.id == takeId)

    // if (getId) {
    //     res.json(getId)
    // } else {
    //     res.json({ message: " User not found" })
    // }

    try {

        //  step 1: Create a conncetion between Nodejs and mongoDb 
              const Connection = await mongoClient.connect(URL) //Node js la eruinthu data base point pannthu
      
        //Step 2: Select the DB
              const db = Connection.db(DB)
        //Step 3 :Select the collection 
        //Step 4 : Do the operation (Create, Update, Read, Delete)
             let user =   await db.collection("users").findOne ({_id:mongodb.ObjectId(req.params.id) })
        
                //Step 5  : Close the connection 
              await Connection.close()
              res.json(user)
      
          } catch (error) {
              console.log(error)
        //if any error throw error use for try atch method 
              res.status(500).json({ message: "Somthing went wrong" })
          }

})

app.put("/user/:id", async function (req, res) {
    // let takeId = req.params.id;
    // let userIndex = users.findIndex((item) => item.id == takeId)

    // if (userIndex != -1) {
    //     Object.keys(req.body).forEach((item) => {
    //         users[userIndex][item] = req.body[item]
    //     });
    //     res.json({
    //         message: "Done"
    //     });
    // } else {
    //     res.json({
    //         message: "User not found"
    //     })
    // }

    //----------------------Edit Method----------------------------------------------
    //  Edit method 

    try {

//  step 1: Create a conncetion between Nodejs and mongoDb 
              const Connection = await mongoClient.connect(URL) //Node js la eruinthu data base point pannthu
      
//Step 2: Select the DB
              const db = Connection.db(DB)
//Step 3 :Select the collection 
//Step 4 : Do the operation (Create, Update, Read, Delete)
             let user =   await db.collection("users").findOneAndUpdate({_id:mongodb.ObjectId(req.params.id)},{$set:req.body})
        
//Step 5  : Close the connection 
              await Connection.close()
              res.json(user)
      
          } catch (error) {
              console.log(error)
//if any error throw error use for try atch method 
              res.status(500).json({ message: "Somthing went wrong" })
          }

})



//----------------delete method--------------------------------------------
app.delete("/user/:id",async function (req, res) {
    // let takeId = req.params.id;
    // let userIndex = users.findIndex((item) => item.id == takeId)

    // if (userIndex != -1) {
    //     users.splice(userIndex, 1)

    //     res.json({
    //         message: "User Deleted"
    //     })
    // } else {
    //     res.json({
    //         message: "User not found",
    //     });
    // }



    try {

        //  step 1: Create a conncetion between Nodejs and mongoDb 
                      const Connection = await mongoClient.connect(URL) //Node js la eruinthu data base point pannthu
              
        //Step 2: Select the DB
                      const db = Connection.db(DB)
        //Step 3 :Select the collection 
        //Step 4 : Do the operation (Create, Update, Read, Delete)
                     let user =   await db.collection("users").findOneAndDelete({ _id: mongodb.ObjectId(req.params.id)})
                
        //Step 5  : Close the connection 
                      await Connection.close()
                      res.json(user)
              
                  } catch (error) {
                      console.log(error)
        //if any error throw error use for try atch method 
                      res.status(500).json({ message: "Somthing went wrong" })
                  }

});


app.listen(process.env.PORT || 3000);
