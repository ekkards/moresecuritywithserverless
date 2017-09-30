let callCounter = 0;

exports.handler = (event, context, callback) => {
    // console log for environment variables
    //console.log(process.env);
    let a = eval(event.a);
    let b = eval(event.b);
    let result = a + b;
    callback(null, `a + b = ${result}`);
};