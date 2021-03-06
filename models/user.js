const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

//Define model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});


// on Save Hook, encrypt password
userSchema.pre('save', function(next) {
  // get access to the user model
  const user = this;

  // generate a salt then run callback
  bcrypt.genSalt(10, function (err, salt) {

    // hash the password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash){
      // overwrite plaintext password with encrypted password
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidate, callback) {
  bcrypt.compare(candidate, this.password, function(err, isMatch) {
    if (err) return callback(err);

    callback(null, isMatch);
  });
};
//Create model class
const ModelClass = mongoose.model('user', userSchema);

//Export the model
module.exports = ModelClass;