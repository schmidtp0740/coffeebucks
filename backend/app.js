var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');

var app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port, ()=>{
    console.log("Listening on port: ", port);
});
