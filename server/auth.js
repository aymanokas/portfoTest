// import fetch from '../src/core/fetch'
const fetch = require('node-fetch')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const saltRounds = 15
const defaultUserName = 'abdel'
const hashedPwd = '$2b$15$qwqDEcVNH0oXU7uhjIgzp.TGbLP5okoBzCczRfDgAodJ3W8DyApRO'

router.post('/signin', async (req, res) => {
  let isSimilar = false
  const username = req.body.username
  const password = req.body.password
  const match = await bcrypt.compare(password, hashedPwd)
  console.log('match : ', match)
    if(match) {
       res.status(200).json({ match })
    }
  else res.status(200).json({ match })
 
})

module.exports = router