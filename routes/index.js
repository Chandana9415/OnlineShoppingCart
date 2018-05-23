/*

var express = require('express');
var router = express.Router();

//var controllerMongoCollection=require('../controllers/database'); //load controller code dealing with mongodb and routes collection

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//exercise m1 new code

//var express = require('express');
//var XXX = express.Router();
/*
var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://Chandana9415:Chandu03!@ds133360.mlab.com:33360/heroku_1zwzjmrz';



//**************************************************************************
//***** mongodb get all of the Routes in Routes collection where frequence>=1
//      and sort by the name of the route.  Render information in the views/pages/mongodb.ejs
XXX.get('/mongodb', function (request, response) {

    mongodb.MongoClient.connect(mongoDBURI, function(err,  client) {
        if(err) throw err;
        //get handle to the database
        var theDatabase = client.db('heroku_1zwzjmrz');


        //get collection of Routes
        var Routes = db.collection('Orders');
        //get all Routes
        Routes.find({ }).sort({ name: 1 }).toArray(function (err, docs) {
            if(err) throw err;

            response.render('pages/mongodb', {results: docs});

        });

        //close connection when your app is terminating.
        db.close(function (err) {
            if(err) throw err;
        });
    });//end of connect

});//end XXX.get

//end of new code




//now processing post
router.post('/storeData', function(req, res, next) {
//expecting data variable called order--retrieve value using body-parser
var value_name = req.body.order;  //retrieve the data associated with order
res.send("order successfully received: " + value_name);
});



module.exports = router;

*/

var express = require('express');
var router = express.Router();
mongodb = require('mongodb');

var mongoDBURI = process.env.MONGODB_URI || 'mongodb://Chandana9415:Chandu03!@ds133360.mlab.com:33360/heroku_1zwzjmrz';


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

module.exports = router;