let {hana,dbInfo} = require("../config/dbConfig")

exports.getUser=async(req,res)=>{
    let client=hana.createConnection()
    try{
        
        let query='SELECT top 10 *  from "ET_PLANT_DATA"';
        let resp=  await new Promise((resolve,reject)=>{
        client.connect(dbInfo);
           client.exec(query,(err,rows)=>{
                if(err){
                    reject(err);
                }
                else{
                    console.log(rows);
                    resolve(rows)
                }
            })
        })  
        res.status(200).send({"result":resp});
    }
    catch(error){
        res.status(500).send({"message":error.message});
    }
}