const model = require('../models')


const login = (req, res) => {
  res.render('login')
};


const Admin_dashboard = (req, res) => {
  res.render('Admin_dashboard')
};

const Admin_register_user = (req, res) => {
  res.render('Admin_register_user')
};

const create_payable = (req, res) => {

  const payable_post_db = {
    yearLevel : req.body.yearLevel,
    block : req.body.block,
    student: req.body.student,
    description : req.body.description,
    amount : req.body.amount,
 
  }
  
  model.payable.create(payable_post_db).then (result => {
    res.status(200)
    res.render("Treasurer_create_payable", {message: "Data have been save!"})
  }).catch(error => {
   res.status(500)
   res.render("Treasurer_register_user", {message: "Something wet wrong pls try again!!"})
   
  })
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
  res.render("Treasurer_register_user", {message: "Data have been save!"})
}).catch(error => {
 res.status(500)
 res.render("Treasurer_register_user", {message: "Something wet wrong pls try again!!"})
 
})
};


const Treasurer_dashboard = (req, res) => {
  res.render('Treasurer_dashboard')
};


const Treasurer_create_payable = (req, res) => {
  res.render('Treasurer_create_payable')
};


const Treasurer_register_user = (req, res) => {
  res.render('Treasurer_register_user')
};

const Treasurer_remittance = (req, res) => {
  res.render('Treasurer_remittance')
};



const getAllRegisteredUsers = (req, res) => {
  model.register_user.findAll()  
      .then(users => {
          res.render("registered_users", { users });  
      })
      .catch(error => {
          res.status(500).render("error", { message: "Unable to retrieve users" });
      });
};







module.exports = {
  login,
  Admin_dashboard,
  Admin_register_user,
  create_payable,
  register_user_by_role,
  Treasurer_create_payable,
  Treasurer_dashboard,
  Treasurer_register_user,
  getAllRegisteredUsers ,
  Treasurer_remittance,


};
