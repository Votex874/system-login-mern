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

router.post('/login', (req, res) => {
  const { email, password } = req.body
  User.findOne({
    email: email
  })
  .then(user => {
    if(user) {
      if(bcrypt.compareSync(password, user.password)){
        const payload = {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 1440
        }).then( token => {
          res.send('cosik')
        })
        res.send('cosik')
      } else {
        res.json({ error: 'User does not exist'})
      }
    } else {
      res.json({ error: 'User does not exist'})
    }
  })
  .catch(err => {
    res.send(`error: ${err}`)
  })
})

router.get('/profile', (req, res) => {
  const decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send("User does not exist")
      }
    })
    .catch(err => {
      res.send(`error: ${err}`)
    })
})

module.exports = router