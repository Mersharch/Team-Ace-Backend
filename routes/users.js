const router = require('express').Router();
const { signup, getUsers } = require('../controllers/userController');


router.route('/').get(getUsers);

router.route('/add').post(signup);


module.exports = router;
