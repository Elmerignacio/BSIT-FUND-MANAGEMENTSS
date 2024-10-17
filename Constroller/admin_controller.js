const model = require('../models')

const login = (req, res) => {
  res.render('login')
};


const dashboard = (req, res) => {
  res.render('dashboard')
};

const register_user = (req, res) => {
  res.render('register_user')
};

const register_user_by_role = (req, res) => {

const register_post_db = {
  userId : req.body.userId,
  lastName: req.body.lastName,
  firstName : req.body.firstName,
  yearLevel : req.body.yearLevel,
  block : req.body.block,
  gender : req.body.gender,
  role : req.body.role,
  userName : req.body.userName,
  password : req.body.password,
}

model.register_user.create(register_post_db).then (result => {
  res.status(200)
  res.render("register_user", {message: "Data have been save!"})
}).catch(error => {
 res.status(500)
 res.render("register_user", {message: "Something wet wrong pls try again!!"})
 
})


};


module.exports = {
  login,
  dashboard,
  register_user,
  register_user_by_role
};
