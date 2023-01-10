const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.set("strictQuery", false);
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected successfully");
  } catch (error) {
    console.log("Database Error");
  }
};

module.exports = connectDatabase;
