const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const MongoURI = 'mongodb://localhost:27071/mernloginreg'

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log(`MongoDB connected on port ${port}`))