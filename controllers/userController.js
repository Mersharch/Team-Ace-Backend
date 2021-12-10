const User = require('../models/user.model');


exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user)
      return res.status(400).json({
        message: "User already exists",
      });
  
    const { Firstname, Lastname, Email, Password } = req.body;
    const newUser = new User({
      Firstname,
      Lastname,
      Email,
      Password,
    });


  
    newUser.save((err, data) => {
      if (err) {
        return res.statusCode(400).json({
          message: "There seems to be a problem!!!",
        });
      }
    
      if (data) {
        return res.status(201).json({
          message: "Account created successfully",
        });
      }
    });
  });
};

exports.getUsers = (req, res) => {
  User.find({})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
};
  