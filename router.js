const config = require('./config');
const apihttpeace = require('./controllers/httpeace');

function isApiValid(req, res, next) { // middleware to check if the apikey exists


    if (!req.headers.apikey){ // if the request header does not contain apikey header
      return res.status(403).send({
            success: false,
            message: 'No API Key provided'
      });
    }

    if (req.headers.apikey == config.apikey){ // check if the apikey match from the system
        return next();
    } else {
      return res.json({ success: false, message: 'Failed to authenticate API key' });
    }

}

module.exports = function(app) {

  app.get('/', function(req, res){
    res.json({message: 'welcome to httpeace api'});
  });

  app.route('/api')
    .get(isApiValid, apihttpeace.getAllOrder)
    .post(isApiValid, apihttpeace.postOrder);

  app.route('/api/:orderId')
    .get(isApiValid, apihttpeace.findOrder)
    .patch(isApiValid, apihttpeace.patchOrder)
    .delete(isApiValid, apihttpeace.delOrder);
}
