var Order = require('../model/order.js');

exports.getorders = function(req, res) {
    Order.getorders((err, order) => {
        return err ? res.send(err) : res.send(order);
    });
};

exports.getorder = function(req, res) {
    Order.getorder(req.params.id,(err, order) => {
        return err ? res.send(err) : res.send(order);
    });
};

exports.createorder = function(req, res) {
    var newOrder = new Order(req.body);
    console.log(req.body);
    Order.createorder(newOrder,(err, order) => {
        return err ? res.send(err) : res.json(order);
    });
};
