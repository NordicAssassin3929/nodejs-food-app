'use strict';

var Item = require('../model/item.js');

exports.getitems = function(req, res) {
    Item.getitems((err, item) => {
        return err ? res.send(err) : res.send(item);
    });
};

exports.getitem = function(req, res) {
    Item.getitem(req.params.id,(err, item) => {
        return err ? res.send(err) : res.send(item);
    });
};

exports.createitem = function(req, res) {
    var newItem = new Item(req.body);
    console.log(req.body);
    Item.createitem(newItem,(err, item) => {
        return err ? res.send(err) : res.json(item);
    });
};

exports.edititem = function(req, res) {
    Item.edititem(req.params.id, new Item(req.body),(err, comm) => {
        return err ? res.send(err) : res.json(comm);
    });
};

exports.deleteitem = function(req, res) {
    Item.deleteitem(req.params.id,(err, item) => {
        return err ? res.send(err) : res.json({message: 'Item successfully deleted!'});
    });
};


