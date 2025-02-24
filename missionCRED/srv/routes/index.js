var express = require('express');
var router = express.Router();
var controller=require("../controller/dbCred.controller")
var auth=require("../middleware/auth")


/* GET home page. */
router.get('/index', function(req, res) {
  res.status("200").send({"message":"index page has been done"});
});

router.get("/db",auth.authwww(),controller.getInfo);
router.post("/inserDetails",auth.authwww(),controller.insertData);
router.delete("/deleteRows",auth.authwww(),controller.deleteRows);
router.put("/updateRow",auth.authwww(),controller.updateRow);

module.exports = router;
