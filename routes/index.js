const express = require('express');;
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('Router Loaded');

router.get('/',homeController.home);
router.get('/call',homeController.make_call);
router.use('/room',require('./room'));
router.use('/users', require('./users'));
router.post('/calljoin',homeController.join_call);

module.exports = router;