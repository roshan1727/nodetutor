var hana=require('@sap/hana-client');



var config={
  serverNode  : 'acaf7b8b-2def-44c4-bc0c-adb78aa50c93.hana.trial-us10.hanacloud.ondemand.com:443',
  uid         : 'DBADMIN',
  pwd         : 'July@2002',
  CURRENTSCHEMA:"DBADMIN"
}
exports.getPlant= async (req,res)=>{
  // initalizinting the connection
  const client= hana.createConnection()
  try{
    client.connect(config);
    console.log("COnnection successful");
    const query='SELECT top 10  * from USERINFO';
    let resp=await new Promise((resolve,reject)=>{
      client.exec(query,(err,rows)=>{
        if(err){
          reject(err);
        }
        else{
          resolve(rows);
        }
      })
    })
    res.status(200).send({"data":resp});
  }
  catch (error){

    console.log("came to catch block");
    res.status(500).send({"message":error.message});

  }
  finally{
    client.disconnect();
    console.log("The DB has been stopped");
  }
};

exports.insertPlant = async (req,res)=>{
  const client= hana.createConnection();
  try{
    client.connect(config);
    console.log(req.body);
    for(const element of req.body){
      let query=`INSERT INTO "USERINFO" ("ID","HOST","PORT","PASSWORD") VALUES (${element.ID},'${element.HOST}',${element.PORT},'${element.PASSWORD}')`;
      await new Promise((resolve,reject)=>{
        client.execute(query,(err,affectedRows)=>{
          if(err){
            reject(err);
          }
          else{
            console.log("inserted successfully");
            
            resolve(affectedRows);
          }
        })
      })
    }
    res.status(200).send({"message":"Data inserted Successfully"});
  }
  catch (error){
    res.status(500).send({"error":error});
  }
  finally{
    client.disconnect();
    console.log("HANA DB STOPPED");
    
  }
}


// put method

exports.updatePlant= async (req,res)=>{

 let client= hana.createConnection();
 try{
  client.connect(config);
  let query=`UPDATE "USERINFO" SET "HOST"='${req.body.HOST}',"PORT"='${req.body.PORT}' where "ID"='${req.query.ID}'`;
  await new Promise((resolve,reject)=>{
    client.execute(query,(err,affectedRows)=>{
      console.log("came to the Query successfully");
      
      if(err){
        reject(err);
      }
      else{
        resolve(affectedRows);
      }
    })
  })
  res.status(202).send({"message":"updated data successfully"});
 }
 catch(error){
  res.status(500).send({"error":error.message});
 }
 finally{
  console.log("disconnected");
  
  client.disconnect();
 }
}


exports.deletePlant= async (req,res)=>{
  let client=hana.createConnection();
  try{
    client.connect(config);
    let query=`DELETE from "USERINFO" where "ID"= ${req.params.ID}`;
    await new Promise((resolve,reject)=>{
      client.execute(query,(err,affectedRows)=>{
        if(err){
          reject(err);
        }
        else{
          resolve(affectedRows);
        }
      })

    })
    res.status(209).send({"message":"deleted the row successfully"});
  }
  catch(error){[
    res.status(500).send({"error":error.message})
  ]}
  finally{
    client.disconnect();
  }
}


