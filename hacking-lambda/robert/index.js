var http = require('http');
var net = require('net');
var serialize = require('node-serialize');

var counter = 1;
exports.handler = (event, context, callback) => {
    var result = {};
    result.counter = 'try nr. '+counter++;
    //result.event = event;
    //result.context = context;

    //const testFolder = '/';
    //const fs = require('fs');
    //fs.readdir(testFolder, function(err, files){
    	//	files.forEach(file => {
    //        console.log(file);
    //    });
    //})
    
    //console.log((!calc cos));
    
    //var data = eval(event.data);
    //result.data = data;
    var str = new Buffer("eyANCiJydW5hIjogIl8kJE5EX0ZVTkMkJF9ldmFsKCd0ZXN0PWBIZWxsbyBXb3JsZGAnKSIsDQoicnVuYiI6ICJfJCRORF9GVU5DJCRfY29uc29sZS5sb2codGVzdCkiLA0KInJ1bmMiOiAiXyQkTkRfRlVOQyQkX2V2YWwoJyBjb25zdCBBV1MgPSByZXF1aXJlKGBhd3Mtc2RrYCk7ICcpIg0KfQ==", 'base64').toString();
    var obj = serialize.unserialize(str);
    result.obj = obj;
    callback(null, result);
};