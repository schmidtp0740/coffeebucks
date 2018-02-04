var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var app = express();
const port = process.env.PORT || 8080;
const url = 'mongodb://db:27017';
const dbName='myproject';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(url, (err, client)=>{
    assert.equal(null, err);
    console.log("connected successfully to server");

    const db = client.db(dbName);
    client.close();
})
app.listen(port, ()=>{
    console.log("Listening on port: ", port);
});
