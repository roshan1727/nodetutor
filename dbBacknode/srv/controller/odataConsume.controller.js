const axios=require("axios");

exports.getNorthwindData = async (req,res)=>{
    try{
        let response=await axios({
            method:"GET",
            url:"https://services.odata.org/northwind/northwind.svc/Products?$format=json",
            Headers:{"Accept":"application/json"}
    
        })
        let data=response.data;
        res.status(200).send({data:data});
    }
    catch(error){
        res.status(500).send({"message":error.message});
    }
}