const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://SunPear:edcvbhu13689A@cluster0.z2h8l.gcp.mongodb.net/amadas?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const GameRouter = require("./routers/game");
const TypeGameRouter = require("./routers/gameType");
const AccountRouter = require("./routers/account");
const LibraryRouter=require("./routers/library")
const OrderRouter = require("./routers/order")

app.use("/games", GameRouter);
app.use("/types", TypeGameRouter);
app.use("/accounts", AccountRouter);
app.use("/librarys", LibraryRouter);
app.use("/orders",OrderRouter)

if (process.env.NODE_ENV=='production'){
  //set static frontend
  app.use(express.static(path.join(__dirname, "client", "build")))
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
