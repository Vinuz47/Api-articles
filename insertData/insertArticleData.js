const mongoose = require("mongoose");
const article = require("./articleSch");


async function run() {
    try{
        const newArticle = await article.create(
            
            
             [
                    {
                     title:"The Role of Climate Change in Food Security",
                     author: "Ruwanthika Sandali",
                     description:
                     "Climate change poses a significant threat to global food security, impacting agricultural productivity and the resilience of food systems. Rising temperatures, unpredictable weather patterns, and increased frequency of extreme events, such as droughts and floods, undermine the ability of farmers to grow crops and raise livestock. As a result, many regions experience reduced yields, leading to heightened food insecurity.In particular, smallholder farmers in developing countries are disproportionately affected, as they often lack the resources to adapt to changing conditions. The FAO estimates that climate change could increase the number of undernourished people by up to 122 million by 2030 if no action is taken. Additionally, shifts in agricultural zones may force farmers to alter traditional practices, which can disrupt local economies and food cultures.To combat these challenges, sustainable agricultural practices, such as agroecology and crop diversification, are essential. Investing in climate-resilient crops and improving water management can also enhance food security. Furthermore, global cooperation is crucial in addressing the root causes of climate change, as well as supporting vulnerable communities. By recognizing the interconnectedness of climate change and food security, we can develop effective strategies to ensure a sustainable food future for all.",
                     imgUrl: "https://firebasestorage.googleapis.com/v0/b/bhawana-magazine.appspot.com/o/Profile%20Pictures%2F1723544004690278?alt=media&token=e1a3de14-e35f-471d-bc33-bf26b488b964",
                     university: "Sabaragamuwa University of Sri Lanka",
                     date: new Date("2024-10-24T17:20:11Z")
                    },
                    {
                        title:"The Role of Climate Change in Food Security",
                        author: "Ruwanthika Sandali",
                        description:
                        "Climate change poses a significant threat to global food security, impacting agricultural productivity and the resilience of food systems. Rising temperatures, unpredictable weather patterns, and increased frequency of extreme events, such as droughts and floods, undermine the ability of farmers to grow crops and raise livestock. As a result, many regions experience reduced yields, leading to heightened food insecurity.In particular, smallholder farmers in developing countries are disproportionately affected, as they often lack the resources to adapt to changing conditions. The FAO estimates that climate change could increase the number of undernourished people by up to 122 million by 2030 if no action is taken. Additionally, shifts in agricultural zones may force farmers to alter traditional practices, which can disrupt local economies and food cultures.To combat these challenges, sustainable agricultural practices, such as agroecology and crop diversification, are essential. Investing in climate-resilient crops and improving water management can also enhance food security. Furthermore, global cooperation is crucial in addressing the root causes of climate change, as well as supporting vulnerable communities. By recognizing the interconnectedness of climate change and food security, we can develop effective strategies to ensure a sustainable food future for all.",
                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/bhawana-magazine.appspot.com/o/Profile%20Pictures%2F1723544004690278?alt=media&token=e1a3de14-e35f-471d-bc33-bf26b488b964",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-23T17:20:11Z")
                       },
                       {
                        title:"The Role of Climate Change in Food Security",
                        author: "Ruwanthika Sandali",
                        description:
                        "Climate change poses a significant threat to global food security, impacting agricultural productivity and the resilience of food systems. Rising temperatures, unpredictable weather patterns, and increased frequency of extreme events, such as droughts and floods, undermine the ability of farmers to grow crops and raise livestock. As a result, many regions experience reduced yields, leading to heightened food insecurity.In particular, smallholder farmers in developing countries are disproportionately affected, as they often lack the resources to adapt to changing conditions. The FAO estimates that climate change could increase the number of undernourished people by up to 122 million by 2030 if no action is taken. Additionally, shifts in agricultural zones may force farmers to alter traditional practices, which can disrupt local economies and food cultures.To combat these challenges, sustainable agricultural practices, such as agroecology and crop diversification, are essential. Investing in climate-resilient crops and improving water management can also enhance food security. Furthermore, global cooperation is crucial in addressing the root causes of climate change, as well as supporting vulnerable communities. By recognizing the interconnectedness of climate change and food security, we can develop effective strategies to ensure a sustainable food future for all.",
                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/bhawana-magazine.appspot.com/o/Profile%20Pictures%2F1723544004690278?alt=media&token=e1a3de14-e35f-471d-bc33-bf26b488b964",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-22T17:20:11Z")
                       },
                       {
                        title:"The Role of Climate Change in Food Security",
                        author: "Ruwanthika Sandali",
                        description:
                        "Climate change poses a significant threat to global food security, impacting agricultural productivity and the resilience of food systems. Rising temperatures, unpredictable weather patterns, and increased frequency of extreme events, such as droughts and floods, undermine the ability of farmers to grow crops and raise livestock. As a result, many regions experience reduced yields, leading to heightened food insecurity.In particular, smallholder farmers in developing countries are disproportionately affected, as they often lack the resources to adapt to changing conditions. The FAO estimates that climate change could increase the number of undernourished people by up to 122 million by 2030 if no action is taken. Additionally, shifts in agricultural zones may force farmers to alter traditional practices, which can disrupt local economies and food cultures.To combat these challenges, sustainable agricultural practices, such as agroecology and crop diversification, are essential. Investing in climate-resilient crops and improving water management can also enhance food security. Furthermore, global cooperation is crucial in addressing the root causes of climate change, as well as supporting vulnerable communities. By recognizing the interconnectedness of climate change and food security, we can develop effective strategies to ensure a sustainable food future for all.",
                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/bhawana-magazine.appspot.com/o/Profile%20Pictures%2F1723544004690278?alt=media&token=e1a3de14-e35f-471d-bc33-bf26b488b964",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-21T17:20:11Z")
                       },
                       {
                        title:"The Role of Climate Change in Food Security",
                        author: "Ruwanthika Sandali",
                        description:
                        "Climate change poses a significant threat to global food security, impacting agricultural productivity and the resilience of food systems. Rising temperatures, unpredictable weather patterns, and increased frequency of extreme events, such as droughts and floods, undermine the ability of farmers to grow crops and raise livestock. As a result, many regions experience reduced yields, leading to heightened food insecurity.In particular, smallholder farmers in developing countries are disproportionately affected, as they often lack the resources to adapt to changing conditions. The FAO estimates that climate change could increase the number of undernourished people by up to 122 million by 2030 if no action is taken. Additionally, shifts in agricultural zones may force farmers to alter traditional practices, which can disrupt local economies and food cultures.To combat these challenges, sustainable agricultural practices, such as agroecology and crop diversification, are essential. Investing in climate-resilient crops and improving water management can also enhance food security. Furthermore, global cooperation is crucial in addressing the root causes of climate change, as well as supporting vulnerable communities. By recognizing the interconnectedness of climate change and food security, we can develop effective strategies to ensure a sustainable food future for all.",
                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/bhawana-magazine.appspot.com/o/Profile%20Pictures%2F1723544004690278?alt=media&token=e1a3de14-e35f-471d-bc33-bf26b488b964",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-17T17:20:11Z")
                       },
                       {
                        title:"The Role of Climate Change in Food Security",
                        author: "Ruwanthika Sandali",
                        description:
                        "Climate change poses a significant threat to global food security, impacting agricultural productivity and the resilience of food systems. Rising temperatures, unpredictable weather patterns, and increased frequency of extreme events, such as droughts and floods, undermine the ability of farmers to grow crops and raise livestock. As a result, many regions experience reduced yields, leading to heightened food insecurity.In particular, smallholder farmers in developing countries are disproportionately affected, as they often lack the resources to adapt to changing conditions. The FAO estimates that climate change could increase the number of undernourished people by up to 122 million by 2030 if no action is taken. Additionally, shifts in agricultural zones may force farmers to alter traditional practices, which can disrupt local economies and food cultures.To combat these challenges, sustainable agricultural practices, such as agroecology and crop diversification, are essential. Investing in climate-resilient crops and improving water management can also enhance food security. Furthermore, global cooperation is crucial in addressing the root causes of climate change, as well as supporting vulnerable communities. By recognizing the interconnectedness of climate change and food security, we can develop effective strategies to ensure a sustainable food future for all.",
                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/bhawana-magazine.appspot.com/o/Profile%20Pictures%2F1723544004690278?alt=media&token=e1a3de14-e35f-471d-bc33-bf26b488b964",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-16T17:20:11Z")
                       },
                       {
                        title:"The Role of Climate Change in Food Security",
                        author: "Ruwanthika Sandali",
                        description:
                        "Climate change poses a significant threat to global food security, impacting agricultural productivity and the resilience of food systems. Rising temperatures, unpredictable weather patterns, and increased frequency of extreme events, such as droughts and floods, undermine the ability of farmers to grow crops and raise livestock. As a result, many regions experience reduced yields, leading to heightened food insecurity.In particular, smallholder farmers in developing countries are disproportionately affected, as they often lack the resources to adapt to changing conditions. The FAO estimates that climate change could increase the number of undernourished people by up to 122 million by 2030 if no action is taken. Additionally, shifts in agricultural zones may force farmers to alter traditional practices, which can disrupt local economies and food cultures.To combat these challenges, sustainable agricultural practices, such as agroecology and crop diversification, are essential. Investing in climate-resilient crops and improving water management can also enhance food security. Furthermore, global cooperation is crucial in addressing the root causes of climate change, as well as supporting vulnerable communities. By recognizing the interconnectedness of climate change and food security, we can develop effective strategies to ensure a sustainable food future for all.",
                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/bhawana-magazine.appspot.com/o/Profile%20Pictures%2F1723544004690278?alt=media&token=e1a3de14-e35f-471d-bc33-bf26b488b964",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-10T17:20:11Z")
                       },
                       {
                        title:"The Role of Climate Change in Food Security",
                        author: "Ruwanthika Sandali",
                        description:
                        "Climate change poses a significant threat to global food security, impacting agricultural productivity and the resilience of food systems. Rising temperatures, unpredictable weather patterns, and increased frequency of extreme events, such as droughts and floods, undermine the ability of farmers to grow crops and raise livestock. As a result, many regions experience reduced yields, leading to heightened food insecurity.In particular, smallholder farmers in developing countries are disproportionately affected, as they often lack the resources to adapt to changing conditions. The FAO estimates that climate change could increase the number of undernourished people by up to 122 million by 2030 if no action is taken. Additionally, shifts in agricultural zones may force farmers to alter traditional practices, which can disrupt local economies and food cultures.To combat these challenges, sustainable agricultural practices, such as agroecology and crop diversification, are essential. Investing in climate-resilient crops and improving water management can also enhance food security. Furthermore, global cooperation is crucial in addressing the root causes of climate change, as well as supporting vulnerable communities. By recognizing the interconnectedness of climate change and food security, we can develop effective strategies to ensure a sustainable food future for all.",
                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/bhawana-magazine.appspot.com/o/Profile%20Pictures%2F1723544004690278?alt=media&token=e1a3de14-e35f-471d-bc33-bf26b488b964",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-04T17:20:11Z")
                       },
                    
     
     
                 ]
            
            
          
    );
        console.log(newArticle);
    }catch(err){
        console.log(`Error: ${err}`);
    }
    
}


module.exports = run;