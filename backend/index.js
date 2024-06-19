import express from 'express'
import mongoose from 'mongoose';
import connectDB from './db/index.js';
import cors from "cors";
const app = express();
import dotenv from "dotenv";
dotenv.config();
// const port = process.env.PORT || 3000;
// const mongoUrl = process.env.MONGODB_URL;
// console.log(mongoUrl);
app.use(cors());

// Connecting to MongoDB Database


import router from './routes/transactionRoutes.js';
app.use("/", router);

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


// mongoose
//   .connect(mongoUrl)
//   .then(() => {
//     console.log(`Connected to ${mongoUrl}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Defining the API routes
app.get("/", (req, res) => {
  res.send("Hello Roxiler Systems!");
});




// Starting the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
