var sql = require('../db/database');

var Address = function(address) {
    this.address_id = address.address_id;
    this.app_user_info_id = address.app_user_info_id;
    this.street = address.street;
    this.house_num = address.house_num;
    this.city_id = address.city_id;
};

module.exports = Address;
