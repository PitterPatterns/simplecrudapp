import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.route.js";
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello Alec from the API");
});

mongoose
  .connect(
    "mongodb+srv://pitteralec:fddX8LBazYqFkjkH@firstcluster.dwtqguc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=firstCluster"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
