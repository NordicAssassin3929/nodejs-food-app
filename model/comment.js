var sql = require('../db/database');

var Comment = function(comm) {
    this.comment_id = comm.comment_id;
    this.comment = comm.comment;
    this.app_user_id = comm.app_user_id;
    this.order_id = comm.order_id;
};

Comment.getcomments = function(result) {
    sql.query('SELECT * FROM `ch_restaurant`.`comments`', (err, res) => {
        return err ? result(null, err) : result(null, res);
    });
};

Comment.getcomment = function(id, result) {
    sql.query('SELECT * FROM `ch_restaurant`.`comments` WHERE comment_id = ?', id,(err, res) => {
        return err ? result(null, err) : result(null, res);
    });
};

Comment.createcomment = function(newComm, result) {
    sql.query('INSERT INTO `ch_restaurant`.`comments` SET ?', newComm,(err, res) => {
        return err ? result(null, err) : result(null, res.insertId);
    });
};

Comment.editcomment = function(id, comm, result) {
    sql.query('UPDATE `ch_restaurant`.`comments` SET comment = ? WHERE comment_id = ?', [comm.comment, id],(err, res) => {
        return err ? result(null, err) : result(null, res );
    });
};

Comment.deletecomment = function(id, result) {
    sql.query('DELETE FROM `ch_restaurant`.`comments` WHERE comment_id = ?', [id],(err, res) => {
        return err ? result(null, err) : result(null, res );
    });
};

module.exports = Comment;
