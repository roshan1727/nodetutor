var {hana,config}=require("../config/dbConfig");


console.log("came to dbCred file");

exports.getInfo = async(req,res)=>{
    let client=hana.createConnection();
    try{
        var query="SELECT * from CONFIGURATIONS";
        let responds= await new Promise((resolve,reject)=>{
            client.connect(config);
            client.exec(query,(err,rows)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(rows);
                }
            })
        })
        res.status(200).send({data:responds});
    }
    catch(error){
        res.status(500).send({"message":error.message});
    }
    finally{
        client.disconnect();
        console.log("DB is Disconnected");
        
    }
}



exports.insertData=async(req,res)=>{
    const client= hana.createConnection();
  try{
    client.connect(config);
    console.log(req.body);
    for(const data of req.body){
      if(ValidationData(data)){
        let query=`INSERT INTO "CONFIGURATIONS" ("ID","ADDITIONAL_TABLE_CONTEXT","METHOD","APP_DESCRIPTION","APP_NAME","CONFIG_NAME") VALUES (${data.ID},'${data.ADDITIONAL_TABLE_CONTEXT}','${data.METHOD}','${data.APP_DESCRIPTION}', '${data.APP_NAME}','${data.CONFIG_NAME}')`;
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
      else{
        res.status(400).send({"messgae":"check the payload"});
      }
    }
    res.status(200).send({"message":"Data inserted Successfully"});
  }
  catch (error){
    res.status(500).send({"error":error.message});
  }
  finally{
    client.disconnect();
    console.log("HANA DB STOPPED in inserting function call");
    
  }
}




exports.deleteRows= async (req,res)=>{
    let client=hana.createConnection();
    try{
        client.connect(config);
        console.log("body ",req.body);
        var data=req.body.ID;
        console.log("array",data);
        for(id of data){
            let query= `DELETE from "CONFIGURATIONS" where ID = ${id}`;
            await new Promise((resolve,reject)=>{
                client.exec(query,(err,affectedRows)=>{
                    if(err){
                        reject(err);
                    }
                    else{
                        resolve(affectedRows);
                    }
                })
            })
        }
        res.status(200).send({"message":"data's has been deleted successfully"});   
    }
    catch(error){
        res.status(500).send({"message":error.message});
    }
    finally{
        client.disconnect();
    }
}





exports.updateRow= async(req,res)=>{
    let client=hana.createConnection();
    try{
        client.connect(config);
        let datas=req.body;
        for(const dt of datas){
            console.log("data is of ",dt);
        let query=`UPDATE  "CONFIGURATIONS" SET "APP_NAME"='${dt.APP_NAME}',"METHOD"='${dt.METHOD}' where ID=${dt.ID}`;
        console.log(`UPDATE  "CONFIGURATIONS" SET "APP_NAME"='${dt.APP_NAME}',"METHOD"='${dt.METHOD}' where ID=${dt.ID}`);
        
        await new Promise((resolve,reject)=>{
            client.exec(query,(err,affectedRows)=>{
                if(err){
                    reject(err);
                    console.log("eror");
                }
                else{
                    console.log("suf");
                    resolve(affectedRows);
                }
            })
        })
        }   
        res.status(200).send({"messgae":"updated te record successfully"});
    
    }
    catch(error){
        console.log(error);
        
        res.status(500).send({"message":error.message});
    }
    finally{
        console.log("Hana is been stopped");
    }
}




function ValidationData(data){
    console.log("data are ",data);
    console.log("ID is of ",typeof(data.ID));
    console.log("Desc is of ",typeof(data.APP_DESCRIPTION));
    
        if((typeof(data.ID) == 'number') && (typeof(data.CONFIG_NAME) == 'string') && (typeof(data.APP_NAME) == 'string') && (typeof(data.APP_DESCRIPTION) == 'string') && (typeof(data.METHOD) == 'string') && (typeof(data.ADDITIONAL_TABLE_CONTEXT) == 'string')){
            return 1;
        }
        else{
            return 0;
        }
}


