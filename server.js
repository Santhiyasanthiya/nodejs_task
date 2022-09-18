// const express = require("express")
// const app = express()

// app.get("/home", function (req, res){
//     res.json([
//         {
//             name: "Person 1",
//             age : 10
//         },
//         {
//             name: "Person 2",
//             age : 20
//         },
//         {
//             name: "Person 3",
//             age : 30
//         },
//     ])
// });

// app.get("/about", function (req, res){
//     res.json({message: "About..."})
// });


// app.listen(3000)

//       npm run start

// -----------------------Get Post method-----------------------------------------
// const express = require("express")
// const app = express()

// app.get("/home", function (req, res){
//     res.json([
//         {
//             name: "Person 1",
//             age : 10
//         },
//         {
//             name: "Person 2",
//             age : 20
//         },
//         {
//             name: "Person 3",
//             age : 30
//         },
//     ])
// });

// app.get("/about", function (req, res){
//     res.json({message: "About..."})
// });
// // post Man POST method
// app.post ("/user", function(req, res){
//     res.json({message: " User Create Successfully "})  //post method chrome url la work aagathu because link ellame get method la thaan erukkum 
// })                                                      //so post method use pannanumna (post man app) download pannanum

// app.listen(3000);

//-------------------------------------------------------------
// Post method if you click send button result will be shoe on terminal undifined
// const express = require("express")
// const app = express()

// let users = [];

// app.get("/home", function (req, res){

// });

// app.get("/about", function (req, res){
//     res.json({message: "About..."})
// });

// app.post ("/user", function(req, res){
//     console.log(req. body)
//     res.json({message: " User Create Successfully "})  
// })                                   
// app.listen(3000);

//-----------middle ware method ------------------------------------

// const express = require("express")
// const app = express()

// let users = [];

// //middle ware
// app.use(express.json()) 

// app.get("/home", function (req, res){

// });

// app.get("/about", function (req, res){
//     res.json({message: "About..."})
// });

// app.post ("/user", function(req, res){
//     console.log(req.body)
//     res.json({message: " User Create Successfully "})  
// })                                   
// app.listen(3000);


//----------------------------------------------------------------
// what will you give the data in post method UrL, if you want that data's  you will go to check in get method
//  before get method URL if you click datas will show empty


// const express = require("express")
// const app = express()

// let users = [];

// //middle ware
// app.use(express.json()) 

// app.get("/home", function (req, res){

// });

// app.get("/about", function (req, res){
//     res.json({message: "About..."})
// });

// app.post ("/user", function(req, res){

//       console.log(req.body)

//     users.push(req.body)
//     res.json({message: " User Create Successfully "})  
// })      

// app.get("/show", function (req, res){
//     res.json(users);
// })
// app.listen(3000);

//--------------length ------------------------------------------------------------------------------
//multiple object [] kulla varumbothu get panni edukkum bothu length use panna than object id ya eduthu show panna mudium


// const express = require("express")
// const app = express()

// let users = [];

// //middle ware
// app.use(express.json())

// app.get("/home", function (req, res) {

// });

// app.get("/about", function (req, res) {
//     res.json({ message: "About..." })
// });

// app.post("/user", function (req, res) {
//     req.body.id = users.length + 1;
//     users.push(req.body)
//     res.json({ message: " User Create Successfully " })
// })

// app.get("/show", function (req, res) {
//     res.json(users);
// })


// app.listen(3000);


//-----------------14/09/2022- Class--------------------------------------------

//{} kulla particular ah onnu mattum or oru id mattum venumna find() use pannanum 

// const express = require("express")
// const app = express()

// let users = [
//     {
//         id : 1,
//         name : " Person 1",
//         age : 20
//     },
//     {
//         id : 2,
//         name : " Person 2",
//         age : 22
//     },
//     {
//         id : 3,
//         name : " Person 3",
//         age : 23
//     },
// ];

// //middle ware
// app.use(express.json())

// app.get("/show", function (req, res) {
//     res.json(users);
// })

// app.post("/user", function (req, res) {
//     req.body.id = users.length + 1;
//     users.push(req.body)
//     res.json({ message: " User Create Successfully " })
// });

// app.get("/user/:id", function (req, res){
//    let takeId = req.params.id
//    let a = users.find((item) => item.id == takeId)
//    console.log(a)
// })


// app.listen(3000);

//--------------------------------------------------------------------------------------
//if else condition ...users la erukka  item.id takeId um onna eruintha result varanum else not found varanum 


// const express = require("express")
// const app = express()

// let users = [
//     {
//         id : 1,
//         name : " Person 1",
//         age : 20
//     },
//     {
//         id : 2,
//         name : " Person 2",
//         age : 22
//     },
//     {
//         id : 3,
//         name : " Person 3",
//         age : 23
//     },
// ];

// //middle ware
// app.use(express.json())

// app.get("/show", function (req, res) {
//     res.json(users);
// })

// app.post("/user", function (req, res) {
//     req.body.id = users.length + 1;
//     users.push(req.body)
//     res.json({ message: " User Create Successfully " })
// });

// app.get("/user/:id", function (req, res){
//    let takeId = req.params.id
//    let getId = users.find((item) => item.id == takeId)
   
//    if(getId) {
//     res.json(getId)
//    }else{
//     res.json({message : " User not found"})
//    }
// })


// app.listen(3000);


//------------------------------------------------

// const express = require("express")
// const app = express()

// let users = [];

// //middle ware
// app.use(express.json())

// app.get("/show", function (req, res) {
//     res.json(users);
// })

// app.post("/user", function (req, res) {
//     req.body.id = users.length + 1;
//     users.push(req.body)
//     res.json({ message: " User Create Successfully " })
// });

// app.get("/user/:id", function (req, res){
//    let takeId = req.params.id
//    let getId = users.find((item) => item.id == takeId)
   
//    if(getId) {
//     res.json(getId)
//    }else{
//     res.json({message : " User not found"})
//    }
// })
// //----Edit mehod
// // app.put("/user/:id", function(req,res){
// //     let takeId = req.params.id ;
// //     let userIndex = users.findIndex((item) => item.id == takeId)
   
// //     Object.keys(req.body).forEach((item) => {
// //         users[userIndex][item] = req.body[item]
// //     })
// // })

// //---------------if condition--------------------------

// app.put("/user/:id", function(req,res){
//     let takeId = req.params.id ;
//     let userIndex = users.findIndex((item) => item.id == takeId)
   
//     if(userIndex != -1){
//     Object.keys(req.body).forEach((item) => {
//         users[userIndex][item] = req.body[item]
//     });
//     res.json({
//         message: "Done"
//     });
// }else{
//     res.json({
//         message : "User not found"
//     })
// }
// })
// //----------------delete method

// app.delete("/user/:id",function(req, res){
//     let takeId = req.params.id ;
//    let userIndex = users.findIndex((item) => item.id == takeId)
   
//  if(userIndex != -1){
//     users.splice(userIndex, 1)

//     res.json({
//      message : "User Deleted"
//     })
//  }else{
//     res.json({
//         message : "User not found",
//     });
// }

// });

// app.listen(3000);


//-------------------QUERY PARAMS------------------------------------

// const express = require("express")
// const app = express()

// let users = [];

// //middle ware
// app.use(express.json())

// app.get("/show", function (req, res) {
//     let qParms = req.query
//     console.log(qParms)

// let resUser = []

// for (let index = parseInt (req.query.offset); index < parseInt(req.query.offset) + parseInt (req.query.limit); index ++); {
//     resUser.push(users[index])
    
// }
//     res.json(resUser);
// })

// app.post("/user", function (req, res) {
//     req.body.id = users.length + 1;
//     users.push(req.body)
//     res.json({ message: " User Create Successfully " })
// });

// app.get("/user/:id", function (req, res){
//    let takeId = req.params.id
//    let getId = users.find((item) => item.id == takeId)
   
//    if(getId) {
//     res.json(getId)
//    }else{
//     res.json({message : " User not found"})
//    }
// })

// app.put("/user/:id", function(req,res){
//     let takeId = req.params.id ;
//     let userIndex = users.findIndex((item) => item.id == takeId)
   
//     if(userIndex != -1){
//     Object.keys(req.body).forEach((item) => {
//         users[userIndex][item] = req.body[item]
//     });
//     res.json({
//         message: "Done"
//     });
// }else{
//     res.json({
//         message : "User not found"
//     })
// }
// })
// //----------------delete method

// app.delete("/user/:id",function(req, res){
//     let takeId = req.params.id ;
//    let userIndex = users.findIndex((item) => item.id == takeId)
   
//  if(userIndex != -1){
//     users.splice(userIndex, 1)

//     res.json({
//      message : "User Deleted"
//     })
//  }else{
//     res.json({
//         message : "User not found",
//     });
// }

// });

// app.listen(3000);


//----------15/9/2022---------------------------------
// mock API KU PATHILA NODE JS LA CREATE PANNA LINK POTTU ANSWER VARA VAIKKA VENUM

const express = require("express")
const cors = require("cors")
const app = express();


let users = [];

//middle ware
app.use(express.json())
app.use(cors({
    origin : "http://localhost:3001"
}))


app.get("/show", function (req, res) {

    let queryParams = req.query
    console.log(queryParams);

    let resUser = []

    for(let index = parseInt(req.query.offset); index < parseInt(req.query.offset) + parseInt(req.query.limit); index ++){
        if(users[index]){
            resUser. push(users[index])
        }
    }

    res.json(resUser);
})

app.post("/user", function (req, res) {
    req.body.id = users.length + 1;
    users.push(req.body)
    res.json({ message: " User Create Successfully " })
});

app.get("/user/:id", function (req, res){
   let takeId = req.params.id
   let getId = users.find((item) => item.id == takeId)
   
   if(getId) {
    res.json(getId)
   }else{
    res.json({message : " User not found"})
   }
})

app.put("/user/:id", function(req,res){
    let takeId = req.params.id ;
    let userIndex = users.findIndex((item) => item.id == takeId)
   
    if(userIndex != -1){
    Object.keys(req.body).forEach((item) => {
        users[userIndex][item] = req.body[item]
    });
    res.json({
        message: "Done"
    });
}else{
    res.json({
        message : "User not found"
    })
}
})
//----------------delete method

app.delete("/user/:id",function(req, res){
    let takeId = req.params.id ;
   let userIndex = users.findIndex((item) => item.id == takeId)
   
 if(userIndex != -1){
    users.splice(userIndex, 1)

    res.json({
     message : "User Deleted"
    })
 }else{
    res.json({
        message : "User not found",
    });
}

});


app.listen(3000);
