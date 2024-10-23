const express = require('express');
const route = express.Router();
const admin_controller = require('../Constroller/route_controller');


route.get('/login', admin_controller.login)
route.get('/Admin_dashboard', admin_controller.Admin_dashboard)
route.get('/Admin_register_user', admin_controller.Admin_register_user)

route.post('/create_payable', admin_controller.create_payable)
route.post('/register_user_by_role', admin_controller.register_user_by_role)

route.get('/Treasurer_create_payable', admin_controller.Treasurer_create_payable)
route.get('/Treasurer_dashboard', admin_controller.Treasurer_dashboard)
route.get('/Treasurer_register_user', admin_controller.Treasurer_register_user)

route.get('/Treasurer_BSIT_3A_remittance',admin_controller.Display_BSIT_3A)
route.get('/Treasurer_BSIT_3B_remittance',admin_controller.Display_BSIT_3B)














module.exports = route
