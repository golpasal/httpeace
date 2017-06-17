const Order= require('../models/order');

exports.getAllOrder = function(req, res, next){
  Order.find({}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
}

exports.postOrder = function(req, res, next) {
  var neworder = new Order(req.body);
  neworder.save(function(err, order) {
    if (err)
      res.send(err);
    res.json({message: 'Order posted', orderInfo: order});
  });
}

exports.findOrder = function(req, res, next){
  Order.findById(req.params.orderId, function(err, order) {
    if (err)
      res.send(err);
    res.json({message: 'Order found', orderInfo: order});
  });
}

exports.delOrder = function(req, res, next) {
  Order.remove({
    _id: req.params.orderId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Order successfully deleted' });
  });
}

exports.patchOrder = function(req, res, next) {
  Order.findOneAndUpdate(req.params.taskId, req.body, {upsert: true, new: true}, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'Order succesfully updated', orderInfo: order});
  });
}
