const mongoose = require("mongoose");
const uri =
  "mongodb+srv://mern-book-store:Ananmongodb23@ims-cluster.kujdh.mongodb.net/?retryWrites=true&w=majority&appName=IMS-Cluster";
;

function main() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Succesfull");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

module.exports = { main };
