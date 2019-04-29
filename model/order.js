var sql = require('../db/database');

var Order = function(order) {
    this.app_user_id = order.app_user_id;
    this.order_time = order.order_time;
    this.note = order.note;
};

Order.getorders = function(result) {
    sql.query('SELECT * FROM `ch_restaurant`.`order`', (err, res) => {
        return err ? result(null, err) : result(null, res);
    });
};

Order.getorder = function(id, result) {
    sql.query('SELECT * FROM `ch_restaurant`.`order` WHERE order_id = ?', id,(err, res) => {
        return err ? result(null, err) : result(null, res);
    });
};

Order.createorder = function(newOrder, result) {
    sql.query('INSERT INTO `ch_restaurant`.`order` set ?', newOrder,(err, res) => {
        return err ? result(null, err) : result(null, res.insertId);
    });
};

module.exports = Order;
