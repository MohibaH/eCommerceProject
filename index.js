const express = require('express');
const app = express();
const DB = require("./database").connectDB;

const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const cartRouter = require("./routers/cartRouter")
 
DB();
app.use(express.json());

app.use("/api/registration", userRouter);
app.use("/api/addProduct", productRouter);
app.use("/api/AddToCart", cartRouter);



app.listen(3000, () =>{
    console.log("listening on Port 3000");
});