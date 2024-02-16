const express = require('express');
const cors = require ('cors');
const {sequelize}=require('../backend/db');


const routeruser=require('../backend/routes/routeuser')



const authRoutes= require("../backend/routes/auth")



sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(error => {
    console.error('Error creating database:', error);
  });

const PORT = 3300
const app = express()
app.use(express.json())

app.use(express.static(__dirname + '../public'))
app.use(cors())

app.use('/user',routeruser)

app.use(cors())
app.use('/',authRoutes)




app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
