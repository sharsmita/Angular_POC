var express = require('express');
const Request = require('request-promise-native');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));


// middleware
router.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });


router.get('/poc', async function (req, res) {
    //intergrate backed API
    
    var options = {
        method: 'GET',
       
       uri: 'https://soc.indusguard.com/pocs/PocSummary',
        headers: {
            'accesskey':'6755f1b2a8092579e2dafaaf8a01f985',
            'secretkey':'d6f64d41dff52c50242c0872198a0a4e'
        },
        body: {
            
        },
        json: true // Automatically parses the JSON string in the response
    }

    let ret = await Request(options)
    //ret= await Request(options)
    console.log("====== function in service called ======",JSON.stringify(ret));
     
     if(ret){
     res.json({
        status: "OK",
        data: ret
    })
    }

 })

module.exports = router;