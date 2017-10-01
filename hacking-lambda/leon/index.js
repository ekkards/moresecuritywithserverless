let callCounter = 0;

exports.handler = (event, context, callback) => {
    // console log for environment variables
    //console.log(process.env);
    console.log(JSON.stringify(event));
    let a = eval(event.queryStringParameters.a);
    console.log(a);
    console.log(event.queryStringParameters.b);
    let b = eval(event.queryStringParameters.b);
    console.log(b);
    let result = a + b;
    console.log(result);
    let data = `a + b = ${result}`;
    responseSuccessText(data, callback);
};

function responseSuccessText (data, callback) {
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),    // plain text, no JSON
    };
    console.log(`statusCode: ${response.statusCode} headers: ${JSON.stringify(response.headers)} body: "${response.body.substr(0, 1000)}${response.body.length > 1000 ? '...' : ''}"`);
    if (callback) callback(null, response);
}