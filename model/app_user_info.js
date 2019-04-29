var sql = require('../db/database');

var App_user_info = function(app_user_info) {
    this.app_user_info_id = app_user_info.app_user_info_id;
    this.first_name = app_user_info.first_name;
    this.last_name = app_user_info.last_name;
    this.dob = app_user_info.dob;
    this.app_user_id = app_user_info.app_user_id;
};

module.exports = App_user_info;
