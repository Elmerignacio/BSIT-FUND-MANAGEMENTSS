const express = require('express');
const route = require('./routes/admin.route.js')
const path = require('path')

const app =  express()

app.use(express.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.use(route)

app.listen(4000, ()=>{
  console.log("Connected to a server!!")
})