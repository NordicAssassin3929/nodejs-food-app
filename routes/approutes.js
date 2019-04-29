'use strict';
module.exports = function(app) {
    var itemcontroller = require('../controllers/itemcontroller');
    var ordercontroller = require('../controllers/ordercontroller');
    var commentcontroller = require('../controllers/commentcontroller');
    var rolecontroller = require('../controllers/rolecontroller');
    var controller = require('../controllers/controller');

    // routes
    app.route('/roles')
        .get(rolecontroller.getroles);
    app.route('/role/:id')
        .get(rolecontroller.getrole);
    app.route('/orders')
        .get(ordercontroller.getorders)
        .post(ordercontroller.createorder);
    app.route('/order/:id')
        .get(ordercontroller.getorder);
    app.route('/items')
        .get(itemcontroller.getitems)
        .post(itemcontroller.createitem);
    app.route('/item/:id')
        .get(itemcontroller.getitem)
        .put(itemcontroller.edititem)
        .delete(itemcontroller.deleteitem);
    app.route('/comments')
        .get(commentcontroller.getcomments)
        .post(commentcontroller.createcomment);
    app.route('/comment/:id')
        .get(commentcontroller.getcomment)
        .put(commentcontroller.editcomment)
        .delete(commentcontroller.deletecomment);
    app.route('/userinfo/:id')
        .get(controller.getuserinfo);
    app.route('/myorder/:id')
        .get(controller.getmyorder);
};
