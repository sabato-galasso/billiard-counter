const express = require('express')
const path = require('path')
//require('dotenv').config({ path: __dirname + '/.env' })

process.env.NODE_TLS_REJECT_UNAUTHORIZED = undefined
process.env.NODE_TLS_REJECT_UNAUTHORIZED || 0

//const socketRouter = require("./routers/socket");
const port = process.env.PORT || 8080
const app = express()


//CORS Middleware
app.use(function (req, res, next) {
  //Enabling CORS
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

app.use(express.json())


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/build'))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
