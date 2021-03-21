// express
const express = require('express');
const router = express.Router();
// body parser
const bodyParser = require("body-parser");
// application/x-www-form-urlencoded 분석
router.use(bodyParser.urlencoded({ extended : true }));
// application/json 분석
router.use(bodyParser.json());

// 해당 URL은 localhost:3000/login 을 요청할 때 들어온다.
router.get('/', function(req, res){
    console.log("[login.js] call login index page");
    res.render("./login/login", {title : "login"});
});

router.post('/auth', function(req, res){
    console.log("[login.js] call auth, params : ", req.body);
    return res.json({success : true});
});

module.exports = router;