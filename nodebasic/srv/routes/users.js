var express = require('express');
var router = express.Router();
var controller= require('../controller/userInfo.controller')
/* GET users listing. */
router.get('/getplantInfo', controller.getPlant);
router.post('/insertData',controller.insertPlant);
router.put("/updatePlant",controller.updatePlant);
router.delete("/deletePlant/:ID",controller.deletePlant);
module.exports = router;
