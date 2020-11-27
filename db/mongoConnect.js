const mongoose = require("mongoose");

try {
  mongoose.connect("mongodb://127.0.0.1:27017/cart", {
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
