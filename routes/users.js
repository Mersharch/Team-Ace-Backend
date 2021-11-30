const router = require('express').Router();

let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const Firstname = req.body.Firstname;

    const Lastname = req.body.Lastname;

    const Email = req.body.Email;

    const Password = req.body.Password;

    const newUser = new User({
        Firstname,
        Lastname,
        Email,
        Password,
    });

    newUser.save()
        .then(() => res.json('Account created successfully'))
        .catch(err => res.status(400).json('Error: ' + err));

});


module.exports = router;