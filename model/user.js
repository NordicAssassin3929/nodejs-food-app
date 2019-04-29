var sql = require('../db/database');

var User = function(user) {
    this.app_user_id = user.app_user_id;
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.role_id = user.role_id;
    this.app_user_info_id = user.app_user_info_id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.dob = user.dob;
    this.app_user_id = user.app_user_id;
    this.address_id = user.address_id;
    this.app_user_info_id = user.app_user_info_id;
    this.street = user.street;
    this.house_num = user.house_num;
    this.city_id = user.city_id;
    this.city_name = user.city_name;
    this.postal_code = user.postal_code;
    this.phone_number_id = user.phone_number_id;
    this.phone_number = user.phone_number;
    this.phone_number_type = user.phone_number_type;
    this.description = user.description;
    this.app_user_info_id = user.app_user_info_id;
};

User.getuserinfo = function(id, result) {
    sql.query('' +
        'SELECT app_user.email, app_user_info.first_name, app_user_info.last_name,\n' +
        'app_user_info.dob, address.street, address.house_num, city.city_name,\n' +
        'city.postal_code, phone_number.phone_number FROM app_user\n' +
        'JOIN app_user_info ON app_user.app_user_id = app_user_info.app_user_id\n' +
        'JOIN address ON app_user_info.app_user_info_id = address.app_user_info_id\n' +
        'JOIN city ON address.city_id = city.city_id\n' +
        'JOIN phone_number ON app_user_info.app_user_info_id = phone_number.app_user_info_id\n' +
        'WHERE app_user.app_user_id = ?', id,(err, res) => {
        return err ? result(null, err) : result(null, res);
    });
};

module.exports = User;

/*
SELECT app_user.email, app_user_info.first_name, app_user_info.last_name,
app_user_info.dob, address.street, address.house_num, city.city_name,
city.postal_code, phone_number.phone_number FROM app_user
JOIN app_user_info ON app_user.app_user_id = app_user_info.app_user_id
JOIN address ON app_user_info.app_user_info_id = address.app_user_info_id
JOIN city ON address.city_id = city.city_id
JOIN phone_number ON app_user_info.app_user_info_id = phone_number.app_user_info_id
WHERE app_user.app_user_id = 2;
 */
