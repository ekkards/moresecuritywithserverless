let callCounter = 0;

exports.handler = (event, context, callback) => {
    console.log(process.env);
    callback(null, 'Hello from Lambda');
};