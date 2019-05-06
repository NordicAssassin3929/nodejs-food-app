var sql = require('../db/database');

var MyOrder = function(myorder) {
    this.order_time = myorder.order_time;
    this.note = myorder.note;
    this.name = myorder.name;
    this.description = myorder.description;
    this.price = myorder.price;
};

MyOrder.getmyorder = function(result) {
    sql.query('SELECT ch_restaurant.order.order_time, ch_restaurant.order.note, item.name, item.description, item.price\n' +
        'FROM ch_restaurant.order\n' +
        'JOIN item \n' +
        'ON ch_restaurant.order.item_id = item.item_id\n' +
        'ORDER BY order.order_id DESC LIMIT 1;', (err, res) => {
        return err ? result(null, err) : result(null, res);
    });
};

module.exports = MyOrder;
