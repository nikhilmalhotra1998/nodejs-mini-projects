'use strict';

var express = require('express');
var cors = require('cors');
const multer = require('multer');

var app = express();
const upload = multer({ dest: `${__dirname}/public` });
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse',upload.single('upfile'),(req, res)=>{
  const { originalname: name, mimetype: type, size } = req.file;
  res.json({
    name,
    type,
    size
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
