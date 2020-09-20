app.get("/api/timestamp/:date_string",function(req,res){
  let dateString = req.params.date_string;
  if(/\d{5,}/.test(dateString)){
    let dateInt=parseInt(dateString);
    let dateObj1=new Date(dateInt);
    if(dateObj1.toString()==="Invalid Date"){
        res.json({"error" : "Invalid Date"});
    }
    else{}
    res.json({unix:dateString, utc: new Date(dateInt).toUTCString()});
  }

    let dateObj=new Date(dateString);
    if(dateObj.toString()==="Invalid Date"){
        res.json({"error" : "Invalid Date"});
    }
    else{
      res.json({unix: dateObj.valueOf(), utc: dateObj.toUTCString()});
    }
  
});

app.get("/api/timestamp",function(req,res){
  res.json({ unix: Date.now(), utc: Date() });
});
