const mongoose = require("mongoose");
const article = require('./insertData/articleSch')
const express = require('express');
const app = express();
const insertData = require("./insertData/insertArticleData");
//const  user = require('../routers/users');
//const  student = require('../routers/students');
// const {MongoClient} = require("mongodb");
// // const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);

const databaseName = 'article-database';
mongoose.connect(`mongodb+srv://kandageTest:kkkkkk@cluster0.jkks3.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{console.log('Connected');
    insertData();

})
.catch((e)=>console.log(e));

app.get('/all',async (req,res)=>{
    try{
        // Call findAllDetails to get the data
        const jsondata = await find();

        //send data in JSON format to response
        res.send(jsondata);
    }catch(err){
        console.error(err);
        res.status(500).send("An error occurred while fetching data.");
    }
    
});

app.get('/hello',(req,res)=>{
    res.send({msg:'hello guys user POST'});
})

app.post('/userspost',(req,res)=>{
    res.send({msg:'hello guys user POST'});
})

async function find() {
    try{
        const findAllArticles = await article.find();

        console.log(findAllArticles);

        return findAllArticles;
    }catch(err){
        console.log(err);
    }
}







//find elements in the database
// async function findAllDetails() {
//     try{
//         // const database = client.db('mydb');
//         // const collection = database.collection('products');

       
//          // Find all documents in the collection
         
//          //const result = await collection.find().toArray();//Convert the cursor to an array
//          const result = await findAllElements;

//          console.log(result);

//          // Convert the array of documents to JSON format
//          //const jsonData = await JSON.stringify(result,null,2);// Pretty-print with 2-space indentation
         
//         // console.log(jsonData);

//          return result;
         
//     }catch(err){
//         console.error(err);
//     }
//     finally{
//         await client.close();
//     }
// }

//midleware creation
// function log(req,res,next){
//     console.log('middleware');
//     next();
// }


console.log(process.env.PORT);
const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`App is running on port: ${port}`));

module.exports = app;