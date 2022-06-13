const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

//middleware (cors mw and 2nd is to parse json)
app.use(cors());
app.use(express.json());

//stablish mongodb connection by this method
mongoose
  .connect(
    "mongodb+srv://Pamuditha:YLNeUjiSiap2SK1Y@cluster0.mlvbjht.mongodb.net/ChartPrice?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Mongo DB Connected");
  }).catch(err=>[
    console.log(err)
  ]);

//http://localhost:3001/
const routes = require("./routes/chartViewRoute");
app.use("/", routes);

//assign port number
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server is Running");
});