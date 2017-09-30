let callCounter = 0;

exports.handler = (event, context, callback) => {
    // console log for environment variables
    //console.log(process.env);
    console.log(event);
    let world = eval(event.name);
    callback(null, `Hello ${world}`);
};