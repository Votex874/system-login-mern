const express = require('express');
const router = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User');
router.use(cors())

process.env.SECRET_KEY = 'secret'

router.post('/register', (req, res) => {
  const today = new Date()
  const { first_name, last_name, email, password} = req.body
  const userData = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
    created: today
  }
  User.findOne({
    email: email
  })
  .then(user => {
    if(!user){
      bcrypt.hash(password, 10, (err, hash) => {
        userData.password = hash
        User.create(userData)
          .then(user => {
            res.json({status: `${user.email} registered!`})
          })
          .catch(err => {
            res.send(`error ${err}`)
          })
      })
    } else {
      res.json({ error: `User already exists`})
    }
  })
  .catch(err => {
    res.send(`error ${err}`)
  })
})

user.post('/login', (req, res) => {
  const { email, password } = req.body
  User.findOne({
    email: email
  })
  .then(user => {
    if(user) {
      if(bcrypt.compareSync(passwrod, user.password)){
        const payload = {
          _id: user._id,
          first_name: 
        }
      }
    }
  })
})

module.exports = router