let mongoose = require("mongoose");

let connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/CRUD");
    console.log("mongoDb connected");
    
  } 
  catch (error) {
    console.log("error in connecting mongoDb", error);
  }
};
module.exports = connectDb;
