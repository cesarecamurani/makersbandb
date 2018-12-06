var express = require('express');
var router = express.Router();
const properties_controller = require('../controllers/properties.controller');
const Property = require('../schemas/properties.model');
const User = require('../schemas/user.model');
const user_controller = require('../controllers/user.controller');

// Global Variable
router.use(function(req, resp, next){
  resp.locals.errors = null;
  resp.locals.user = null;
  next();
});
//

router.get('/', function(req, res) {
	Property.find({},function(err, prop){
        if (err) {
            console.log(err);
        } else{
            console.log(prop);
            res.render('index',{
            	title: 'APP TEST',
            	user: 0,
            	properties: prop
            });
        }
    });
 // res.render('index', { title: 'APP TEST', user: 1, properties: properties_controller.propertyAll()});
});

// router.get('/', function(req, res) {
//   User.findOne({},function(err, user){
//       if (err) {
//           console.log(err);
//       } else{
//           console.log(user);
//           res.render('index',{
//             title: 'APP TEST',
//             user: user,
//           });
//       }
//   });
// });

router.get('/users', function(req, res) {
  res.render('signup', { title: 'APP TEST'});
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/logout', user_controller.user_logout);

router.get('/properties', function(req, res) {
  res.render('propertyAdd');
});

module.exports = router;