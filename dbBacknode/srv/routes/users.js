var express = require('express');
var controller=require('../controller/userInfo.controller')
var controllerOdata=require("../controller/odataConsume.controller")
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/userInfo",controller.getUser);
router.get("/getOdata",controllerOdata.getNorthwindData);

module.exports = router;
