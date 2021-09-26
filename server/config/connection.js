const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://@cluster0.ygwwm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/booksearch",
  {
    dbName: "booksearch",
    user: "carinvid",
    pass: "FUhyM45VpNNkuf0B",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
