const mongoose = require("mongoose");
const article = require("./articleSch");

async function run() {
    try{
        const newArticle = await article.create(
            
            {
             articleDetails :   [
                    {
                     title:" vfd",
                     author: "yahoo",
                     description:"vsdfbsfnbn",
                     imgUrl: "frgenedne",
                     university: "fbsb",
                     date:"dnvjin"
                    },
                    {
                     title:" fwgwgw",
                     author: "geewgweg",
                     description:"wergweg",
                     imgUrl: "ewgfgwe",
                     university: "grwjrjr",
                     date:"gehehethe"
                    }
     
     
                 ]
            }
            
          
    );
        console.log(newArticle);
    }catch(err){
        console.log(`Error: ${err}`);
    }
    
}


module.exports = run;