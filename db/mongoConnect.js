const mongoose = require("mongoose");

const db = process.env.NODE_ENV === "test" ? "test-cart" : "cart";

console.log(db);
try {
  mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
} catch (ex) {
  console.log("errors", ex);
}

mongoose.connection.on("error", function (err) {
  console.log(err);
});
