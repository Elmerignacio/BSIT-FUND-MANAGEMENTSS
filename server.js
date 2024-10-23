const express = require('express');
const route = require('./routes/admin.route.js')
const path = require('path');
require ("dotenv").config()

const app =  express()

app.use(express.urlencoded({extended: true}));

app.set('views',[
  path.join(__dirname, 'views'),
  path.join(__dirname, 'views', 'ADMIN'),
  path.join(__dirname, 'views', 'TREASURER')
]);


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.use(route)

app.listen(process.env.PORT, ()=>{
  console.log("Connected to a server!!")
})