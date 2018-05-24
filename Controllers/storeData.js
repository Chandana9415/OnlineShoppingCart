var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://Chandana:Chandu03!@ds133360.mlab.com:33360/heroku_1zwzjmrz';
//to process data sent in on request need body-parser module
var bodyParser = require('body-parser');
var path = require('path'); //to work with separtors on any OS including Windows
var querystring = require('querystring'); //for use in GET Query string of form URI/path?name=value
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencode

module.exports.storeData = function (req, res, next) {

    mongodb.MongoClient.connect(mongoDBURI, function (err, db) {
        if (err) throw err;
        /**************************************************************************
         * IMPORTANT:  this is how you generate  a random number for  3IDs that
         * you will need for the collections cusomerID, billinID and   shippingID
         *    WHY?  the retrieve _id  info after and  insert (see below)  does not seem
         *     to function properly on Heroku
         *    so to know the ID we simply generate it in code  rather than
         *     autogenerate it for the documents we newly insert into the CUSTOMERS, BILLING, SHIPPING
         *      for ORDERS we allow the system to autogenerate its  _id
         */
        var customerID = Math.floor((Math.random() * 1000000000000) + 1);
        var billingID = Math.floor((Math.random() * 1000000000000) + 1);
        var shippingID = Math.floor((Math.random() * 1000000000000) + 1);
        //customer collection operation


        var CUSTOMERS = db.collection('CUSTOMERS');
        var BILLING = db.collection('BILLING');
        var SHIPPING = db.collection('SHIPPING');
        var ORDERS = db.collection('ORDERS');


        /*CUSTOMERS.deleteMany({}, function (err, result) {
        if (err) throw err;
        });*/

        var customerdata = {
            _id: customerID,
            FIRSTNAME: shipment_info['bfName'],
            LASTNAME: shipment_info['blName'],
            STREET: shipment_info['bAddress'] + ' ' + shipment_info['bAddress2'],
            CITY: shipment_info['city'],
            STATE: shipment_info['bState'],
            ZIP: shipment_info['bZip'],
            PHONE: shipment_info['phone']
        };
        CUSTOMERS.insertOne(customerdata, function (err, result) {
                if (err) throw err;
            }
        )


        var billingdata = {
            _id: billingID,
            CUSTOMER_ID: shipment_info['customerID'],
            CREDITCARDTYPE: shipment_info['ccType'],
            CREDITCARDNUM: shipment_info['add1'] + ' ' + shipment_info['add2'],
            CREDITCARDEXP: shipment_info['ccExp'],
            CREDITCARDSECURITYNUM: shipment_info['cvv']
        };
        BILLING.insertOne(billingdata, function (err, result) {
                if (err) throw err;
            }
        )

        var shippingdata = {
            _id: shippingID,
            CUSTOMER_ID: shipment_info['customerID'],
            SHIPPING_STREET: shipment_info['ccType'],
            SHIPPING_CITY: shipment_info['bAddress'] + ' ' + shipment_info['bAddress2'],
            SHIPPING_STATE: shipment_info['bState'],
            SHIPPING_ZIP: shipment_info['bZip']
        };
        SHIPPING.insertOne(shippingdata, function (err, result) {
                if (err) throw err;
            }
        )

        var ordersdata = {
            CUSTOMER_ID: shipment_info['customerID'],
            BILLING_ID: shipment_info['billingID'],
            SHIPPING_ID: shipment_info['shippingID'],
            DATE: shipment_info['bState'],
            PRODUCT_VECTOR: shipment_info['bZip']

        };
        SHIPPING.insertOne(shippingdata, function (err, result) {
                if (err) throw err;
            }
        )




    })
}
