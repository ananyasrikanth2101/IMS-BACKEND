const dotenv=require("dotenv")
const mongoose = require("mongoose");

dotenv.config()

function main() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Succesfull");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

module.exports = { main };
