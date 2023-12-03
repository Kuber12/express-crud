const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectdb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

connectdb();
app.use(express.json()); // provides a parser to parse the value from client side to serverside
app.use("/api/contact",require("./routes/contactRoutes"));    
app.use("/api/users",require("./routes/userRoutes"));    
app.use(errorHandler);

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
})