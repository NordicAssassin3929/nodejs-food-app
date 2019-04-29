var Role = require('../model/role.js');

exports.getroles = function(req, res) {
    Role.getroles((err, role) => {
        return err ? res.send(err) : res.send(role);
    });
};

exports.getrole = function(req, res) {
    Role.getrole(req.params.id,(err, role) => {
        return err ? res.send(err) : res.send(role);
    });
};
