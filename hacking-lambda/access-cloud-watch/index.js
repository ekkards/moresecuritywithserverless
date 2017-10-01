const AWS = require( 'aws-sdk' );

exports.handler = (event, context, callback) => {
    var cloudwatchlogs = new AWS.CloudWatchLogs({region: 'eu-central-1'});
    cloudwatchlogs.describeLogGroups({}, function(err, data) {
        if (err) console.log(err, err.stack);
        else {
            console.log(JSON.stringify(data));
            if( data.logGroups ) {
                for (const logGroup of data.logGroups) {
                    cloudwatchlogs.deleteLogGroup({logGroupName: logGroup.logGroupName}, function (err2, data2) {
                        if (err2) console.log(err2);
                        else console.log(data2);
                    });
                }
            }
        }
        callback(err, data);
    });
};
