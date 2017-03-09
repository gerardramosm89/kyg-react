const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/api', requireAuth,  function(req, res, next)  {
    res.send({ hi: "there" });
  });
  app.post('/api/signup', requireSignin, Authentication.signup);
  app.post('/api/signin', Authentication.signup);
};