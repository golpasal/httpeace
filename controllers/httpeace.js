const Order= require('../models/order');

exports.getAllOrder = function(req, res, next){ // list all orders
  Order.find({}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
}

exports.postOrder = function(req, res, next) { // add new order
  var neworder = new Order(req.body);
  neworder.save(function(err, order) {
    if (err)
      res.send(err);
    res.json({message: 'Order posted', orderInfo: order});
  });
}

exports.findOrder = function(req, res, next){ // find the order on the database
  Order.findById(req.params.orderId, function(err, order) {
    if (err)
      res.send(err);
    res.json({message: 'Order found', orderInfo: order});
  });
}

exports.delOrder = function(req, res, next) { // remove the order
  Order.remove({
    _id: req.params.orderId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Order successfully deleted' });
  });
}

exports.patchOrder = function(req, res, next) { // update the order
  Order.findOneAndUpdate(req.params.taskId, req.body, {upsert: true, new: true}, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'Order succesfully updated', orderInfo: order});
  });
}
