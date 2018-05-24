var express = require('express');
var router = express.Router();
mongodb = require('mongodb');

var mongoDBURI = process.env.MONGODB_URI || 'mongodb://Chandana:Chandu03!@ds133360.mlab.com:33360/heroku_1zwzjmrz?authMechanism=SCRAM-SHA-1';


var controllerMongoCollection = require('../controllers/database'); //load controller code dealing with database mongodb and Routes collection



/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


//CODE to route /getAllRoutes to appropriate  Controller function
//**************************
//*** mongodb get all of the Routes in Routes collection w
//      and Render information iwith an ejs view
router.get('/getAllOrders', controllerMongoCollection.getAllOrders);

router.post('/storeData', function(req, res, next) {
//expecting data variable called order--retrieve value using body-parser
    var value_name = req.body.order  //retrieve the data associated with order
    res.send("order succesfully received: " + value_name);
});

module.exports = router;