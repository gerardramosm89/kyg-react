const Authentication = require('./controllers/authentication');

module.exports = function(app) {
  app.get('/api', function(req, res, next)  {
    res.send(['waterbottle', 'phone', 'paper']);
  });
  app.post('/api/signup', Authentication.signup);
};