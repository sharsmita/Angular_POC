var app = require('./app');
///var port = process.env.PORT || 3000;
server = app.listen(8888, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Test API service listening at http://%s:%s", host, port)
})

/*

var express = require('express');
var app = express();
var service = require('./routes/poc_service')(app);
app.use('/test',service);
let server // the express server

router = express.Router();
app.use('/',router);


// middleware
app.use(function (req, res, next) {
    
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
/*
    app.get('/test/', async function (req, res) {
        // console.log("====== function called======");
         res.json({
            PendingPOC: 10,
            duetodayPoc : 20,
            overduePoc : 30
         })
         console.log("====== function called======",res.stringify);
     })
 */   
