const mongoose = require("mongoose");

const connection = async function () {
    
        await mongoose.connect("your mongoDB connection url")
        .then(() => {
            console.log("MongoDB connection Successful")
    
        })
        .catch((err) => console.log(err))
    }
    
    module.exports = connection;