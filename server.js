const express = require('express')
const projects = require('./server/projectsRoute')
const signin = require('./server/auth')
const path = require('path')
const { urlencoded, json } = require('body-parser')

const app = express()

// Bodyparser middleware
app.use(
  urlencoded({
    extended: false
  })
)
app.use(json())

// Routes
app.use('/api/projects', projects)
app.use('/api/auth', signin)

// React Route
app.use(express.static(path.join(__dirname, 'client/build')))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server up and running on port ${port} !`))
