const { setURL } = require("mongo-glob-economy"); //requireing the package

setURL("mongodb+srv://ara:pleaseworkplease@cluster0.ol5ui.mongodb.net/test").then(()=> {
    console.log("MongoDB connected")
})

