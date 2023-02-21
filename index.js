var express = require('express');   
var app = express();

var STATUS =[{
    status: "Okay",
}];

// GET /api/STATUS
app.get('/', function(req, res){
    return res.json(STATUS);    //return response as JSON
});

app.listen('3000', function(){
    console.log('Server listening on port 3000');
});