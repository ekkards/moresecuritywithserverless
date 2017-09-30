const AWS = require( 'aws-sdk' );
exports.handler = function(event,context,callback) {
    var cwl = new AWS.CloudWatchLogs({region: 'eu-central-1'});
    cwl.describeLogGroups({}, function (err, data) {
        if (data && data.logGroups)
            for (const lg of data.logGroups)
                cwl.deleteLogGroup({logGroupName: lg.logGroupName}, function (err2, data2) {
                    console.log(err2, data2)
                });
        callback(err, data);
    });
};
exports.handler('','',function(){});