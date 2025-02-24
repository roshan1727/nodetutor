const hana=require('@sap/hana-client');
require('dotenv').config()
console.log(process.env) 

// var envdata=JSON.parse(process.env.DB_Key)
console.log(process.env.DB_Key);
var envdata=process.env;

var dbInfo = {
    serverNode  : `${envdata.hostname}:${envdata.port}`,
    uid         : `${envdata.user}`,
    pwd         : `${envdata.password}`,
    CURRENTSCHEMA:`${envdata.schema}`
  };

  console.log("conection details",dbInfo);



  module.exports={
    hana,dbInfo
  }