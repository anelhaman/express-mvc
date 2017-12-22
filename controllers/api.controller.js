exports.list_all= (req,res)=>{
  res.send("list all data")
}
exports.listById = (req,res)=>{
  res.send(req.params.id)
}