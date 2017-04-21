var bcrypt = require('bcrypt');

// bcrypt.hash('myPlaintextPassword', 10, function(err, hash) {
//   // Store hash in your password DB. 

//   console.log("The hash is: ", hash);
// });

var hash = '$2a$10$is9qYsaOAuiIqhiBC5nd5u/H8tytErgGRCITvk0w16KuYS7ZYpx3q'
bcrypt.compare('myPlaintextPassword', hash, function(err, res) {
    // res == true 
    console.log("the response from the comparison is: ", res);
});