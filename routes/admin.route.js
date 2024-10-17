const express = require('express');
const route = express.Router();
const admin_controller = require('../Constroller/admin_controller');


route.get('/login', admin_controller.login)
route.get('/dashboard', admin_controller.dashboard)
route.get('/register_user', admin_controller.register_user)
route.post('/register_user_by_role', admin_controller.register_user_by_role)

module.exports = route
