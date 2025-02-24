var hana = require('@sap/hana-client');
require('dotenv').config()
console.log(process.env)

var env=process.env;

let info=JSON.parse(env.configInfo);
console.log("updatedtata",JSON.parse(env.configInfo));
var config = {
    serverNode  : `${info.host}:${info.port}`,
    uid         : `${info.user}`,
    pwd         : `${info.password}`,
    CURRENTSCHEMA:`${info.schema}`
  };

  console.log("config info",config);


  module.exports={hana,config};
