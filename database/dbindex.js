// //this is how connect mongoose to local db
// //


// mongoose.connect("mongodb://127.0.0.1:27017/testDB")
// .then(()=>console.log('Connected'))
// .catch((error)=>console.log(`Error: ${error}`))

//username - testUser
//pw - Fx5HHKM5B2kMG6td
// const mongoose = require('mongoose');
// const uridb = "mongodb://testUser:Fx5HHKM5B2kMG6td@cluster0-shard-00-00.jkks3.mongodb.net:27017,cluster0-shard-00-01.jkks3.mongodb.net:27017,cluster0-shard-00-02.jkks3.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-xyz-shard-0&readPreference=primary&ssl=true"

// mongoose.connect(uridb)
// .then(()=>console.log('Connected'))
// .catch((error)=>console.log(`Error: ${error}`))


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://testUser:Fx5HHKM5B2kMG6td@cluster0.jkks3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
