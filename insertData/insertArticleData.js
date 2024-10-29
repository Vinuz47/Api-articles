const mongoose = require("mongoose");
const article = require("./articleSch");


//function to insert details of articles
async function run() {
    try{
        const newArticle = await article.create(
             [
                    {
                        //1
                     title:"Understanding Zero Hunger: An Overview of SDG 2",
                     author: "Ruwanthika Sandali",
                     description:
                     `Sustainable Development Goal 2 (SDG 2) aims to end hunger, achieve food security, improve nutrition, and promote sustainable agriculture by 2030. Recognizing hunger as a multifaceted issue, this goal emphasizes not only the availability of food but also its accessibility and quality. SDG 2 sets several targets, including ending all forms of malnutrition, particularly in vulnerable populations such as children and pregnant women. It also aims to ensure sustainable food production systems and resilient agricultural practices to combat climate change. These targets are essential, as they highlight the need for both quantity and quality in food supply.To achieve Zero Hunger, collaboration among governments, NGOs, and communities is crucial. This involves investing in agricultural research, improving infrastructure, and empowering smallholder farmers, especially women.
                     
                     Innovative solutions, such as urban agriculture and technology-driven farming, can enhance food production and distribution. Ultimately, achieving Zero Hunger is vital not just for individual well-being but also for global stability and economic growth. By prioritizing food security, nations can foster healthier populations, reduce inequalities, and enhance sustainable development, ensuring that everyone has access to sufficient, safe, and nutritious food by 2030.`,

                     imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/1.jpg?alt=media&token=a863fc60-38d7-4ef7-b815-25020e4c10b7",
                     university: "Sabaragamuwa University of Sri Lanka",
                     date: new Date("2024-10-24T17:20:11Z")
                    },
                    {
                        //2
                        title:"The Current State of Global Hunger: Statistics and Trends",
                        author: "Ruwanthika Sandali",
                        description:
                        `As of 2023, the global hunger crisis remains a pressing concern, with approximately 828 million people affected by chronic hunger. This represents an increase from previous years, highlighting the challenges posed by conflicts, climate change, and economic instability. The Food and Agriculture Organization (FAO) reports that malnutrition is on the rise, with nearly 3.1 billion people unable to afford a healthy diet.Regions most impacted by hunger include sub-Saharan Africa, where one in five people faces food insecurity, and parts of Asia, where rising food prices exacerbate the situation. The COVID-19 pandemic disrupted food supply chains, leading to increased vulnerability among populations already struggling with hunger and malnutrition.Trends indicate that as climate-related disasters become more frequent, agricultural productivity declines, further threatening food security.
                        
                        Additionally, the ongoing conflicts in regions like Ukraine and the Horn of Africa contribute to a volatile food environment.Addressing global hunger requires urgent action, including investments in sustainable agriculture, improved food distribution systems, and policies that promote economic stability. Without concerted efforts, the goal of eradicating hunger will remain out of reach, impacting millions of lives and global development.`,
                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/2.jpg?alt=media&token=4f10fa18-0f28-4152-9b2c-eb2253b1c7a9",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-23T17:20:11Z")
                       },
                       {
                        //3
                        title:"The Role of Climate Change in Food Security",
                        author: "Ruwanthika Sandali",
                        description:
                        `Climate change poses a significant threat to global food security, impacting agricultural productivity and the resilience of food systems. Rising temperatures, unpredictable weather patterns, and increased frequency of extreme events, such as droughts and floods, undermine the ability of farmers to grow crops and raise livestock. As a result, many regions experience reduced yields, leading to heightened food insecurity.In particular, smallholder farmers in developing countries are disproportionately affected, as they often lack the resources to adapt to changing conditions. The FAO estimates that climate change could increase the number of undernourished people by up to 122 million by 2030 if no action is taken. Additionally, shifts in agricultural zones may force farmers to alter traditional practices, which can disrupt local economies and food cultures.To combat these challenges, sustainable agricultural practices, such as agroecology and crop diversification, are essential.
                        
                        Investing in climate-resilient crops and improving water management can also enhance food security. Furthermore, global cooperation is crucial in addressing the root causes of climate change, as well as supporting vulnerable communities. By recognizing the interconnectedness of climate change and food security, we can develop effective strategies to ensure a sustainable food future for all.`,
                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/3.jpg?alt=media&token=d24b0fc9-2157-47d5-ac7f-e307148bed49" , 
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-22T17:20:11Z")
                       },
                       {
                        //4
                        title:"Conflict and Hunger: A Global Perspective",
                        author: "Ruwanthika Sandali",
                        description:
                        `Conflict is a significant driver of hunger, affecting millions of people worldwide. As of 2023, approximately 345 million people face acute food insecurity due to conflicts, with war-torn regions experiencing the highest levels of hunger. The relationship between conflict and food security is complex; violence disrupts agricultural production, impedes access to markets, and displaces communities, leading to widespread malnutrition and starvation.In countries like Yemen, Syria, and South Sudan, protracted conflicts have devastated agricultural systems. Farmers are unable to cultivate their land due to fighting, while supply chains are disrupted, making it difficult for people to access food. According to the World Food Programme (WFP), nearly 19 million people in Yemen are food insecure, exacerbated by ongoing violence and economic collapse.Moreover, conflicts often lead to the breakdown of social and economic structures, further complicating efforts to address hunger. Displaced populations, including refugees and internally displaced persons (IDPs), face significant barriers to accessing food and basic services. These marginalized groups are particularly vulnerable, often relying on humanitarian aid for survival.Addressing hunger in conflict settings requires a multi-faceted approach.
                        
                        Humanitarian assistance must be prioritized, focusing on immediate food relief while simultaneously working towards long-term solutions. Initiatives that promote peacebuilding and conflict resolution are crucial, as stable environments are necessary for sustainable agricultural practices and food security.International cooperation and funding are essential for supporting affected communities. Programs that empower local farmers, restore agricultural infrastructure, and enhance resilience can help break the cycle of conflict and hunger. By addressing the root causes of both issues, the global community can work towards a future where food security is a reality for all, regardless of their circumstances.`,

                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/4.jpg?alt=media&token=3cb527be-27da-480d-9560-2455c67005e0",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-21T17:20:11Z")
                       },
                       {
                        //5
                        title:"Innovative Solutions to Achieve Zero Hunger",
                        author: "Ruwanthika Sandali",
                        description:
                        `Achieving Zero Hunger by 2030 requires innovative solutions that address the complex challenges of food security and nutrition. As global population growth, climate change, and economic instability continue to threaten food systems, innovative approaches are essential for sustainable agricultural practices and equitable food distribution. One promising solution is the use of technology in agriculture. Precision farming, which employs data analytics, satellite imagery, and drones, allows farmers to optimize crop yields while minimizing resource use. For instance, sensors can monitor soil moisture and nutrient levels, enabling efficient irrigation and fertilization.
                        
                        This not only increases productivity but also conserves water and reduces chemical runoff.Urban agriculture is another innovative approach gaining traction. By utilizing rooftop gardens, vertical farms, and community gardens, cities can produce fresh food locally, reducing reliance on long supply chains. Urban farming enhances food access, particularly in food deserts where fresh produce is scarce, and fosters community engagement.Agroecology, which integrates ecological principles into farming practices, offers a sustainable path forward. By promoting biodiversity, enhancing soil health, and utilizing organic methods, agroecology supports food security while protecting the environment. Initiatives that support smallholder farmers, particularly women, empower communities to adopt these practices and improve their resilience to climate change.
                        
                        Additionally, digital platforms and mobile applications facilitate better access to market information, enabling farmers to connect directly with consumers and fair trade networks. This reduces the power of intermediaries and ensures that farmers receive fair prices for their products. Collaboration among governments, NGOs, and the private sector is vital for scaling these innovative solutions. Investments in research and development, education, and infrastructure can drive progress toward Zero Hunger. By harnessing creativity and technology, we can transform food systems and ensure that everyone has access to sufficient, safe, and nutritious food.`,

                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/5.jpg?alt=media&token=8ce3308c-bc67-47a2-8b32-1e6eaf37b0d8",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-09-17T17:20:11Z")
                       },
                       {
                        //6
                        title:"The Importance of Nutrition: Addressing Malnutrition",
                        author: "Ruwanthika Sandali",
                        description:
                        `Nutrition plays a vital role in human health, development, and well-being. Malnutrition, encompassing both undernutrition and overnutrition, affects billions globally, posing significant challenges to individuals and societies. Addressing malnutrition is crucial, particularly for vulnerable populations such as children, pregnant women, and the elderly.Undernutrition, characterized by insufficient intake of essential nutrients, can lead to stunting, wasting, and micronutrient deficiencies. In children, these conditions impair physical growth and cognitive development, resulting in long-term consequences, including reduced educational outcomes and productivity. For instance, stunted children are more likely to experience learning difficulties, which can perpetuate cycles of poverty and hinder national development. 
                        
                        Conversely, overnutrition, often linked to excessive calorie intake and poor dietary choices, contributes to rising rates of obesity and non-communicable diseases, such as diabetes and heart disease. This dual burden of malnutrition complicates public health strategies and requires comprehensive approaches to dietary education and lifestyle modifications.To effectively combat malnutrition, a multi-faceted strategy is essential. This includes promoting access to diverse, nutrient-rich foods and implementing nutrition education programs that empower communities to make healthier choices. Governments and organizations must work together to enhance food security and ensure that vulnerable populations receive the support they need. Additionally, integrating nutrition into health services is critical.
                        
                        Regular screening for malnutrition, providing supplementation, and supporting breastfeeding can significantly improve nutritional outcomes. Innovative solutions, such as fortifying staple foods with essential vitamins and minerals, can also help address deficiencies at the population level. Ultimately, addressing malnutrition is not just a health issue; it is a matter of social and economic development. By prioritizing nutrition, we can enhance individual potential, strengthen communities, and foster sustainable progress toward a healthier, more equitable world.`,

                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/6.jpg?alt=media&token=c9862cee-e15c-43fc-a6d9-bcae7583da3e",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-09-20T17:20:11Z")
                       },
                       {
                        //7
                        title:"Empowering Women in Agriculture: A Path to Food Security",
                        author: "Ruwanthika Sandali",
                        description:
                        `Empowering women in agriculture is a crucial strategy for achieving food security and sustainable development. Women make up nearly 43% of the agricultural labor force in developing countries, yet they often face significant barriers that hinder their productivity and access to resources. Addressing these challenges is essential not only for improving food security but also for enhancing overall economic growth.Women farmers typically have less access to land, credit, and agricultural inputs compared to their male counterparts. This disparity limits their ability to cultivate crops effectively and invest in sustainable farming practices. By promoting gender equality in agricultural policies, governments can help level the playing field. Providing women with equal access to resources and training can significantly increase crop yields and improve food security within households and communities.Moreover, women play a vital role in nutrition and food preparation. They are often the primary caregivers and decision-makers regarding family diets. By equipping women with knowledge about nutrition and sustainable agricultural practices, communities can enhance the quality of food available to families.
                        
                        Programs that focus on teaching women about crop diversification and nutrient-rich foods can improve health outcomes, particularly for children.Furthermore, empowering women entrepreneurs in the agricultural sector can foster economic resilience. Supporting women-owned agribusinesses not only creates jobs but also stimulates local economies, leading to stronger communities. Access to markets, technology, and financial services is crucial for women entrepreneurs to thrive. Ultimately, investing in women in agriculture is a pathway to achieving Zero Hunger. By recognizing and harnessing the potential of women, we can create more resilient food systems, enhance nutrition, and promote sustainable development. Collaborative efforts among governments, NGOs, and the private sector are essential to ensure that women receive the support they need to succeed in agriculture, thereby contributing to global food security.`,

                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/7.jpg?alt=media&token=2587f594-73da-4c00-a37a-43605ee22052",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-08-30T17:20:11Z")
                       },
                       {
                        //8
                        title:"The Economic Impact of Hunger on Global Development",
                        author: "Ruwanthika Sandali",
                        description:
                        `Hunger is not merely a humanitarian issue; it is a significant barrier to global economic development. As of 2023, approximately 828 million people suffer from chronic hunger, and this widespread malnutrition has profound economic consequences that reverberate across nations.Hunger undermines productivity and economic growth. Malnourished individuals often experience reduced physical and cognitive capabilities, which directly impacts their ability to work effectively. In agricultural sectors, workers suffering from malnutrition are less productive, leading to decreased crop yields and income. The FAO estimates that the economic cost of hunger can reach up to 3% of a country’s GDP, particularly in developing economies where agriculture plays a central role.

                        Moreover, hunger exacerbates health care costs. Malnutrition is linked to a variety of health issues, including stunted growth in children, increased susceptibility to diseases, and higher mortality rates. These health challenges place a significant burden on healthcare systems, diverting resources that could otherwise be allocated to development initiatives. The World Bank reports that malnutrition-related health costs can account for up to 11% of national healthcare expenditures.

                        Hunger also contributes to social instability and conflict. Areas plagued by food insecurity are more susceptible to unrest, as communities struggle for limited resources. This instability can deter investment and economic development, creating a vicious cycle that perpetuates poverty and hunger. Addressing hunger is therefore not only a moral imperative but also an economic necessity. Investments in sustainable agriculture, nutrition programs, and social safety nets can improve food security and foster economic growth. By tackling the root causes of hunger, nations can create a more resilient and prosperous future, ultimately leading to enhanced global development and stability. Prioritizing food security will yield benefits that extend beyond individual welfare, contributing to national and global economic progress.`,

                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/8.jpg?alt=media&token=0a424e57-9479-44e1-b830-c74e63eb72b5",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-08-20T17:20:11Z")
                       },

                       {
                        //9
                        title:"Local Solutions: Community-Based Approaches to Food Security",
                        author: "Ruwanthika Sandali",
                        description:
                        `Community-based approaches to food security are vital in addressing hunger and malnutrition at the local level. These solutions empower communities to take charge of their food systems, ensuring that food production is sustainable, equitable, and responsive to local needs. By focusing on local resources and knowledge, these initiatives can effectively combat food insecurity while promoting resilience and self-sufficiency.
                        
                        One successful model is urban agriculture, which transforms unused spaces in cities into productive gardens. Community gardens, rooftop farms, and vertical gardens not only provide fresh produce but also foster community engagement and education. For instance, initiatives in cities like Detroit and Havana have demonstrated how urban agriculture can improve access to nutritious food, reduce food deserts, and enhance community cohesion.Another effective approach is the establishment of food cooperatives. These member-owned businesses focus on sourcing local products, providing communities with access to fresh, healthy food while supporting local farmers. By cutting out intermediaries, food cooperatives can offer affordable prices, making nutritious options accessible to all.
                        
                        Education and training programs also play a critical role in community-based food security. Workshops on sustainable farming practices, nutrition, and food preservation empower individuals with the knowledge to make informed decisions about their diets and agricultural practices. Such initiatives can encourage the adoption of organic farming methods, crop diversification, and improved food preparation techniques.
                        
                        Furthermore, community-supported agriculture (CSA) programs connect consumers directly with local farmers, ensuring a steady supply of fresh produce while fostering a sense of community. These partnerships build trust between producers and consumers, promoting sustainable practices and enhancing local economies. By empowering communities, fostering collaboration, and promoting education, these initiatives can effectively address hunger and malnutrition, paving the way for healthier and more resilient societies.`,

                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/9.jpg?alt=media&token=72c28f94-5ae2-4668-a345-2b4e40406f9f",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-08-20T17:20:11Z")
                       },

                       {
                        //10
                        title:"The Impact of Economic Inequality on Food Access",
                        author: "Ruwanthika Sandali",
                        description:
                        `Economic inequality significantly affects food access, creating disparities that leave vulnerable populations struggling to obtain sufficient, nutritious food. In many countries, the gap between the wealthy and the poor has widened, leading to unequal distribution of resources and opportunities. This inequality directly impacts food security, as low-income households often face barriers that prevent them from accessing healthy food options.
                        
                        One of the primary ways economic inequality affects food access is through income disparities. Families with limited financial resources frequently rely on cheaper, processed foods that are high in calories but low in nutritional value. These foods, often found in food deserts—areas with limited access to fresh produce—contribute to poor health outcomes, including obesity and related diseases. Conversely, wealthier individuals can afford healthier, organic options, exacerbating health disparities.Moreover, economic inequality influences education and awareness about nutrition. Lower-income communities may lack access to nutrition education, leading to poor dietary choices and unhealthy eating habits. Without knowledge of balanced diets and cooking skills, families are less equipped to make informed food choices, perpetuating cycles of malnutrition.
                        
                        Transportation also plays a critical role in food access. Many low-income individuals do not have reliable transportation to grocery stores that offer fresh produce. This limitation forces them to rely on convenience stores, which often stock unhealthy food options, further diminishing their access to nutritious foods.
                        
                        Addressing these inequalities requires comprehensive policy interventions aimed at improving economic conditions for marginalized communities. Initiatives such as increasing the minimum wage, providing food assistance programs, and enhancing access to education can help bridge the gap in food access. Additionally, fostering community-based solutions, like local farmers' markets and cooperative grocery stores, can empower communities to take control of their food systems.
                        
                        In conclusion, economic inequality profoundly impacts food access, leading to significant health disparities. By addressing the root causes of inequality, we can improve food security and promote healthier communities, ultimately contributing to a more equitable society`,

                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/10.jpg?alt=media&token=e8a075e9-d946-4dd3-aba4-b8693dc57c32",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-10T17:20:11Z")
                       },

                       {
                        //11
                        title:"Youth Engagement in the Fight Against Hunger",
                        author: "Ruwanthika Sandali",
                        description:
                        `Youth engagement is crucial in the fight against hunger, as young people bring innovative ideas, energy, and a fresh perspective to addressing food insecurity. With nearly 1.8 billion people aged 15 to 24 globally, harnessing their potential can significantly impact efforts to eradicate hunger and promote sustainable food systems.One of the most effective ways youth can contribute is through advocacy and awareness campaigns. Young activists use social media platforms to raise awareness about hunger issues, mobilize communities, and influence policy changes. Initiatives like the "Youth Against Hunger" movement highlight the importance of youth voices in global discussions, such as the United Nations Sustainable Development Goals (SDGs). By participating in these dialogues, young people can advocate for policies that prioritize food security and sustainable agriculture.
                        
                        Moreover, youth-led projects focused on community gardening, urban agriculture, and sustainable farming practices have gained traction in many cities. These initiatives not only provide fresh produce to local communities but also educate participants about nutrition and food systems. Programs that teach young people agricultural skills empower them to become self-sufficient and resilient, fostering a new generation of farmers and food advocates.
                        
                        Educational institutions also play a vital role in engaging youth. Schools and universities can incorporate food security topics into curricula, encouraging students to explore solutions through research and community service. Internships and volunteer opportunities with organizations focused on hunger alleviation can further inspire students to take action.Additionally, young people can leverage technology to create innovative solutions for food access. Apps that connect surplus food from restaurants to those in need or platforms that facilitate community food sharing can help bridge gaps in food distribution.
                        
                        Youth engagement is essential in the fight against hunger. By empowering young people to take action through advocacy, community projects, education, and technology, we can build a more sustainable and equitable food system, ensuring that everyone has access to nutritious food.`,

                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/11.jpg?alt=media&token=d7f121e1-e657-4890-a4b4-79261d14db3c",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-12T17:20:11Z")
                       },

                       {
                        //12
                        title:"The Future of Food: Sustainable Agricultural Practices",
                        author: "Ruwanthika Sandali",
                        description:
                        `As the global population continues to grow, the demand for food is expected to increase significantly, necessitating a shift toward sustainable agricultural practices. These practices aim to produce food in ways that are environmentally sound, economically viable, and socially responsible, ensuring food security for future generations while protecting the planet.
                        
                        One essential component of sustainable agriculture is the promotion of biodiversity. Diverse cropping systems, including crop rotation and intercropping, enhance soil health and reduce pest and disease prevalence. By planting a variety of crops, farmers can improve resilience to climate change and fluctuating market demands, thus ensuring consistent food production.
                        
                        Organic farming practices also play a crucial role in sustainability. By minimizing the use of synthetic fertilizers and pesticides, organic agriculture promotes healthier ecosystems and reduces pollution. Methods such as composting, cover cropping, and integrated pest management not only enhance soil fertility but also support the natural balance of agricultural systems.
                        
                        Agroecology is another innovative approach that integrates ecological principles into farming. This holistic method emphasizes local knowledge and practices, encouraging farmers to work in harmony with nature. Agroecological practices can lead to improved food production while fostering community resilience and local food sovereignty.Technological advancements are also vital for sustainable agriculture. Precision farming, which utilizes data analytics and technology to optimize resource use, enables farmers to monitor soil health, water usage, and crop conditions more effectively. This leads to higher yields with lower environmental impact.
                        
                        Furthermore, education and training for farmers are essential to promote sustainable practices. Governments and NGOs can support this by providing resources, workshops, and access to sustainable seeds and technologies.The future of food depends on adopting sustainable agricultural practices that balance productivity with environmental stewardship. By embracing biodiversity, organic methods, agroecology, and technology, we can create a resilient food system that meets the needs of a growing population while protecting the planet for future generations.`,

                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/12.jpg?alt=media&token=74e87f4d-6486-454e-b4c4-53d0d3d5367d",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-15T17:20:11Z")
                       },

                       {
                        //13
                        title:"Global Partnerships for Food Security: The Role of International Organizations",
                        author: "Ruwanthika Sandali",
                        description:
                        `Achieving food security on a global scale requires collaborative efforts among nations, non-governmental organizations (NGOs), and international institutions. International organizations play a pivotal role in facilitating partnerships, sharing knowledge, and mobilizing resources to combat hunger and malnutrition around the world.The Food and Agriculture Organization (FAO) is one of the leading entities in this field. It provides technical expertise and guidance to countries on sustainable agricultural practices and food security strategies. Through initiatives like the FAO's Food Security and Nutrition Framework, the organization promotes integrated approaches that address the multifaceted causes of food insecurity, including poverty, climate change, and economic instability.
                        
                        The World Food Programme (WFP) is another key player dedicated to eradicating hunger. It provides emergency food assistance in crisis situations while implementing long-term programs focused on nutrition, school feeding, and resilience-building. By collaborating with local governments and community organizations, the WFP helps create sustainable solutions that empower individuals and enhance food security.Moreover, the Global Agriculture and Food Security Program (GAFSP) supports investments in agriculture in low-income countries. By providing financial resources and technical assistance, GAFSP enhances agricultural productivity and improves access to markets for smallholder farmers, particularly women, who are often the backbone of food production in their communities.
                        
                        International partnerships are also crucial for knowledge sharing and capacity building. Initiatives like the Scaling Up Nutrition (SUN) Movement unite governments, civil society, and private sectors to coordinate efforts in tackling malnutrition and promoting healthy diets.
                        
                        International organizations are vital in fostering global partnerships for food security. By leveraging resources, expertise, and innovative solutions, they can address hunger and malnutrition effectively, contributing to a more sustainable and equitable world for all. Collaborative efforts are essential to ensure that the global community can work together toward achieving Zero Hunger by 2030.`,

                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/13.jpg?alt=media&token=a6047887-b4aa-46ec-8fe5-3075dabe9bac",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-20T17:20:11Z")
                       },

                       {
                        //14
                        title:"Food Waste: A Hidden Contributor to Hunger",
                        author: "Ruwanthika Sandali",
                        description:
                        `Food waste is a critical but often overlooked contributor to global hunger. Approximately one-third of all food produced for human consumption is wasted, amounting to around 1.3 billion tons annually. This waste occurs at various stages of the food supply chain, from production and processing to retail and household consumption. The implications of this waste extend beyond environmental concerns; it directly impacts food security and exacerbates hunger worldwide.
                        
                        In many developing countries, food waste primarily occurs during the production and post-harvest stages. Poor infrastructure, lack of storage facilities, and inadequate transportation lead to significant losses before food reaches consumers. For instance, fruits and vegetables are particularly vulnerable to spoilage, resulting in lost nutrition and economic opportunities for farmers.In contrast, in developed nations, food waste occurs predominantly at the retail and consumer levels. Supermarkets often discard perfectly edible food due to aesthetic standards or overstocking, while households frequently buy more food than they can consume, resulting in spoilage. This waste represents not only a loss of valuable resources but also a missed opportunity to feed those in need.
                        
                        Addressing food waste presents a viable solution to combat hunger. By improving supply chain efficiency, enhancing storage and transportation methods, and educating consumers about responsible purchasing and food management, we can significantly reduce waste. Initiatives like food recovery networks can facilitate the redistribution of surplus food to food banks and community organizations, providing meals to those facing food insecurity.Additionally, policies aimed at reducing food waste can encourage businesses and consumers to adopt more sustainable practices. Governments can implement regulations to minimize waste at all levels of the supply chain, along with incentives for organizations that donate surplus food.
                        
                        Tackling food waste is essential in the fight against hunger. By recognizing it as a hidden contributor to food insecurity, we can develop effective strategies to reduce waste and ensure that the food produced reaches those who need it most.`,

                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/14.jpg?alt=media&token=6bc7079b-76bb-42f6-8126-098f6c654383",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-25T17:20:11Z")
                       },

                       {
                        //15
                        title:"Policy Recommendations for Achieving Zero Hunger by 2030",
                        author: "Ruwanthika Sandali",
                        description:
                        `Achieving Zero Hunger by 2030 is an ambitious but essential goal that requires comprehensive policy interventions at local, national, and global levels. To effectively combat hunger and malnutrition, policymakers must adopt a multi-faceted approach that addresses the root causes of food insecurity while promoting sustainable agricultural practices.
                        
                        1. Strengthening Social Protection Programs:
                        
                        Governments should enhance social safety nets, such as food assistance programs and cash transfers, to provide immediate relief to vulnerable populations. Expanding social protection can help families access sufficient and nutritious food, particularly during economic downturns or crises.
                        
                        2. Promoting Sustainable Agriculture:
                        
                        Investing in sustainable agricultural practices is crucial for increasing food production while minimizing environmental impact. Policies should encourage agroecology, organic farming, and the use of climate-resilient crops. Supporting smallholder farmers, especially women, through access to credit, training, and resources will enhance productivity and livelihoods.
                        
                        3. Enhancing Food Distribution Systems:
                        
                        Improving food supply chains and distribution networks is vital for reducing food waste and ensuring that food reaches those in need. Policymakers should invest in infrastructure, such as roads and storage facilities, and develop partnerships with local organizations to facilitate efficient food distribution.
                        
                        4. Fostering Education and Awareness:
                        
                        Education plays a critical role in improving nutrition and food security. Policies should promote nutrition education programs that inform communities about healthy eating practices and food preparation. Schools can serve as platforms for teaching children about food systems and sustainable agriculture.
                        
                        5. Supporting Research and Innovation:
                        
                        Governments should allocate funding for research on agricultural technologies and practices that enhance food security. Innovations such as precision farming, vertical agriculture, and biotechnology can significantly improve food production and resilience.
                        
                        6. Encouraging International Cooperation:
                        
                        Global partnerships are essential for addressing hunger. Countries should collaborate with international organizations to share best practices, resources, and knowledge. Strengthening commitments to the Sustainable Development Goals (SDGs) will help unify efforts toward achieving Zero Hunger.
                        
                        A comprehensive policy framework that addresses food security from multiple angles is essential for achieving Zero Hunger by 2030. By implementing these recommendations, nations can create sustainable food systems that ensure everyone has access to sufficient, safe, and nutritious food.`,

                        imgUrl: "https://firebasestorage.googleapis.com/v0/b/ruu-articles-img.appspot.com/o/15.jpg?alt=media&token=cd59b7a5-0440-4b0b-af87-e9413f788e44",
                        university: "Sabaragamuwa University of Sri Lanka",
                        date: new Date("2024-10-30T17:20:11Z")
                       },
                 ]     
    );
        console.log(newArticle);
    }catch(err){
        console.log(`Error: ${err}`);
    }
    
}


module.exports = run;