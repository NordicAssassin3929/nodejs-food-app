var sql = require('../db/database');

var MyOrder = function(myorder) {
    this.order_time = myorder.order_time;
    this.note = myorder.note;
    this.name = myorder.name;
    this.description = myorder.description;
    this.price = myorder.price;
};


MyOrder.getmyorder = function(id, result) {
    sql.query('SELECT ch_restaurant.order.order_time, ' +
        'ch_restaurant.order.note, item.name, item.description, item.price\n' +
        'FROM ch_restaurant.order\n' +
        'JOIN ch_restaurant.order_items\n' +
        'ON order.order_id = order_items.order_id\n' +
        'JOIN item \n' +
        'ON order_items.item_id = item.item_id\n' +
        'WHERE item.item_id = ?', id,(err, res) => {
        return err ? result(null, err) : result(null, res);
    });
};
module.exports = MyOrder;

/*
SELECT ch_restaurant.order.order_time, ch_restaurant.order.note, item.name, item.description, item.price
FROM ch_restaurant.order
JOIN ch_restaurant.order_items
ON order.order_id = order_items.order_id
JOIN item
ON order_items.item_id = item.item_id
WHERE app_user_id = 3;
 */
