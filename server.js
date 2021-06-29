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
app.use('/.well-known/acme-challenge/bbCIkE-Bdm-yqJ0UV2BNu_1eRve-D2G-9f8xaXvgFjE', (req, res) => res.send('bbCIkE-Bdm-yqJ0UV2BNu_1eRve-D2G-9f8xaXvgFjE.mYBh2FM9DVREjokTDOONyo5p1weWJYCQzNG668rt-70'))
app.use('/.well-known/acme-challenge/MawckB9QvwJA2v8pBLClvKrlGWc8Oka6-0LJniwGSI4', (req, res) => res.send('MawckB9QvwJA2v8pBLClvKrlGWc8Oka6-0LJniwGSI4.mYBh2FM9DVREjokTDOONyo5p1weWJYCQzNG668rt-70'))
// React Route
app.use('/', express.static(path.join(__dirname, 'client/build')))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server up and running on port ${port} !`))
