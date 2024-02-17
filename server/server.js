const express = require('express')
const RouteHome = require("../backend/routes/routehome.js")
const cors = require ('cors')
const {sequelize}=require('../backend/db')

const PORT = 3300
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '../public'))
app.use("/home",RouteHome)

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(error => {
    console.error('Error creating database:', error);
  });



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
