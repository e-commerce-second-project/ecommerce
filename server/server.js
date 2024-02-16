const express = require('express');
const cors = require ('cors');
const {sequelize}=require('../backend/db');
const routeruser=require('../backend/routes/routeuser')
const routeradmin=require('../backend/routes/routeadmin')
const authRoutes= require("../backend/routes/auth")


const PORT = 3300
const app = express()
app.use(express.json())
app.use(express.static(__dirname + '../public'))
app.use(cors())
app.use('/user',routeruser)
app.use('/',authRoutes)
app.use('/admin',routeradmin)



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

