const mongoose = require("mongoose");
const product = require('./products')

//username: kandageTest
//pw: kkkkkk

//datbase name
const databaseName = 'sampleData';
mongoose.connect(`mongodb+srv://kandageTest:kkkkkk@cluster0.jkks3.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>console.log('Connected'))
.catch((e)=>console.log(e));


async function run() {
    try{
        const newProduct = await product.create(
            [
                {
                    name:"Laptop i7 1",
                    price: 150000.00,
                    qyt: 30
                },

                {
                    name:"Laptop i7 2",
                    price: 250000.00,
                    qyt: 20
                },

                {
                    name:"Laptop i7 3",
                    price: 350000.00,
                    qyt: 10
                },

                {
                    name:"Laptop i7 4",
                    price: 450000.00,
                    qyt: 50
                },


            ]
          
    );
        console.log(newProduct);
    }catch(err){
        console.log(`Error: ${err}`);
    }
    
}

const findElements = async function find() {
    try{
        const findAllProducts = await product.find();

        console.log(findAllProducts);
    }catch(err){
        console.log(err);
    }
}

module.exports =  { findElements };

