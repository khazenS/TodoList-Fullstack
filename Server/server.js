const express = require("express");
const routers = require("./routers/todos");
const connection = require("./database/databaseConnection");
const app = express();
const costumeErrorHandler = require("./error/costumeErrorHandler");
const cors = require("cors");



// Database Connect 
connection();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// CORS
app.use(cors())
// Express Json
app.use(express.json());
// Routers Middlewares
app.use("/api",routers);
// Error Handler Middleware
app.use(costumeErrorHandler);
app.listen(3000,() => {
    
    console.log("Server started on 3000 PORT");
});