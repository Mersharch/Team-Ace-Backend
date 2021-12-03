const router = require('express').Router();
const { signup } = require('../controllers/userController');


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addUser').post(signup);


module.exports = router;
