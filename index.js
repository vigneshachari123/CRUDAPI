const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/workersdb";
const app = express();
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", function () {
  console.log("connected");
});
app.use(express.json());
const employeeRouter = require("./routers/employee");
app.use("/Allemployess", employeeRouter);

app.listen(9000, function () {
  console.log("server started");
});
