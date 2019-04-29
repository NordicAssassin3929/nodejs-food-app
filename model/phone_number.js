var sql = require('../db/database');

var Phone_number = function(phone_number) {
    this.phone_number_id = phone_number.phone_number_id;
    this.phone_number = phone_number.phone_number;
    this.phone_number_type = phone_number.phone_number_type;
    this.description = phone_number.description;
    this.app_user_info_id = phone_number.app_user_info_id;
};

module.exports = Phone_number;
