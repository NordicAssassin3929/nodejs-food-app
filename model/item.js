var sql = require('../db/database');

var Item = function(item) {
    this.item_id = item.item_id;
    this.name = item.name;
    this.description = item.description;
    this.price = item.price;
};

Item.getitems = function(result) {
    sql.query('SELECT * FROM `ch_restaurant`.`item`', (err, res) => {
        return err ? result(null, err) : result(null, res);
    });
};

Item.getitem = function(id, result) {
    sql.query('SELECT * FROM `ch_restaurant`.`item` WHERE item_id = ? ', id,(err, res) => {
        return err ? result(null, err) : result(null, res);
    });
};

Item.createitem = function(newItem, result) {
    sql.query('INSERT INTO `ch_restaurant`.`item` SET ?', newItem,(err, res) => {
        return err ? result(null, err) : result(null, res.insertId);
    });
};

Item.edititem = function(id, item, result) {
    sql.query('UPDATE `ch_restaurant`.`item` SET name = ?,' +
        ' description = ?, price = ? WHERE item_id = ?',
        [item.name, item.description, item.price, id],(err, res) => {
        return err ? result(null, err) : result(null, res );
    });
};

Item.deleteitem = function(id, result) {
    sql.query('DELETE FROM `ch_restaurant`.`item` WHERE item_id = ?', [id],(err, res) => {
        return err ? result(null, err) : result(null, res );
    });
};

module.exports = Item;
