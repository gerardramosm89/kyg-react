module.exports = function(app) {
  app.get('/api', function(req, res, next)  {
    res.send(['waterbottle', 'phone', 'paper']);
  });
};