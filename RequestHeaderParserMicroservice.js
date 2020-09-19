app.get("/api/whoami",function(req,res){
  const lan=req.headers['accept-language'];
  const userAgent=req.headers['user-agent'];
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
  res.json({"ipaddress":ip ,"language":lan, "software":userAgent});
})
