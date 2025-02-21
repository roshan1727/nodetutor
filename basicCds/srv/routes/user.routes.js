module.exports=(app)=>{
    app.get("/getUsers",(req,res)=>{
    res.send({"message":"hello this is been roued to user file"})
})
}
