const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const uri = "mongodb+srv://dhanu909ab:8KSRU7uZrLnEAT9B@cluster0.inxjg0y.mongodb.net/NextGenIt?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connection established");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
