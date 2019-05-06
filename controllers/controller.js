'use strict';

var App_user = require('../model/app_user.js');
var App_user_info = require('../model/app_user_info.js');
var Address = require('../model/address.js');
var City = require('../model/city.js');
var Phone_number = require('../model/phone_number.js');

var User = require('../model/user');
var MyOrder = require('../model/myorder');

exports.getuserinfo = function(req, res) {
    User.getuserinfo((err, userinfo) => {
        return err ? res.send(err) : res.send(userinfo);
    });
};

exports.getmyorder = function(req, res) {
    MyOrder.getmyorder((err, order) => {
        return err ? res.send(err) : res.send(order);
    });
};
