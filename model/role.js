var sql = require('../db/database');

var Role = function(role) {
    this.role_id = role.role_id;
    this.role_name = role.role_name;
    this.role_description = role.role_description;
};

Role.getroles = function(result) {
    sql.query('SELECT * FROM `ch_restaurant`.`role`', (err, res) => {
        return err ? result(null, err) : result(null, res);
    });
};

Role.getrole = function(id, result) {
    sql.query('SELECT * FROM `ch_restaurant`.`role` WHERE role_id = ?', id, (err, res) => {
        return err ? result(null, err) : result(null, res);
    });
};

module.exports = Role;
