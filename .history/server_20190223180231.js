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

const mongoURI = 'mongodb://localhost:27017/loginsystem'

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log(`MongoDB connected`))
  .catch(err => console.log(err))

const User = require('./routes/Users')

app.use('/users', Users)

app.listen(port, () => console.log(`server is running on port ${port}`))