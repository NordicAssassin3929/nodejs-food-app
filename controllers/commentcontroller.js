'use strict';

var Comment = require('../model/comment');

exports.getcomments = function(req, res) {
    Comment.getcomments((err, comm) => {
        return err ? res.send(err) : res.send(comm);
    });
};

exports.getcomment = function(req, res) {
    Comment.getcomment(req.params.id,(err, comm) => {
        return err ? res.send(err) : res.send(comm);
    });
};

exports.createcomment = function(req, res) {
    var newComm = new Comment(req.body);
    console.log(req.body);
    Comment.createcomment(newComm,(err, comm) => {
        return err ? res.send(err) : res.json(comm);
    });
};

exports.editcomment = function(req, res) {
    Comment.editcomment(req.params.id, new Comment(req.body),(err, comm) => {
        return err ? res.send(err) : res.json(comm);
    });
};

exports.deletecomment = function(req, res) {
    Comment.deletecomment(req.params.id,(err, comm) => {
        return err ? res.send(err) : res.json({message: 'Comment successfully deleted!'});
    });
};
