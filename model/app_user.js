var sql = require('../db/database');

var App_user = function(app_user) {
    this.app_user_id = app_user.app_user_id;
    this.username = app_user.username;
    this.password = app_user.password;
    this.email = app_user.email;
    this.role_id = app_user.role_id;
};

module.exports = App_user;
