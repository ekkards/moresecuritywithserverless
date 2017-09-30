console.log('Loading function');

exports.handler = (event, context, callback) => {
    logInputs( event, context, callback );
    if (!event) {
        responseErrorAsync('missing input parameter', callback);
        return;
    }

    // authorizations
    const claims = getClaims(event);
    if (claims === undefined) {
        responseErrorAsync('authorization required', callback);
        return;
    } else if (!claims.sub) {
        responseErrorAsync('no userId in your user profile', callback);
        return;
    }
    const userId = claims.sub;
    console.log('userId=', userId );
    responseSuccessText( 'user found: '+claims['cognito:username'], callback );
};

function logInputs (event, context, callback) {
    console.log('event:', event ? JSON.stringify(event) : null);
    console.log('context:', context ? JSON.stringify(context) : null);
    console.log('callback:', callback ? typeof callback : null);
}

function responseSuccess (data, callback) {
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),
    };
    console.log(`statusCode: ${response.statusCode} headers: ${JSON.stringify(response.headers)} body: ${response.body}`);
    if (callback) callback(null, response);
}

function responseSuccessText (data, callback) {
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: data,    // plain text, no JSON
    };
    console.log(`statusCode: ${response.statusCode} headers: ${JSON.stringify(response.headers)} body: "${response.body.substr(0, 1000)}${response.body.length > 1000 ? '...' : ''}"`);
    if (callback) callback(null, response);
}

function responseErrorAsync (message, callback) {
    console.error(`error ${message}`);
    if (callback) process.nextTick(callback, null, { statusCode: 400, body: message });
}

function responseErrorSync (message, callback) {
    console.error(`error: ${message}`);
    if (callback) callback(null, { statusCode: 400, body: message });
}

function getClaims (event) {
    let claims;
    // requestContext exists for synchronous Lambda Proxy Integration
    // context exists for asynchronous AWS Service Integration with Lambda
    if (event.requestContext
        && event.requestContext.authorizer
        && typeof event.requestContext.authorizer.claims === 'object') {
        claims = event.requestContext.authorizer.claims;
    } else if (event.context
        && event.context.authorizer
        && typeof event.context.authorizer.claims === 'object') {
        claims = event.context.authorizer.claims;
    } else {
        claims = undefined;
        console.log('claims not found in event.requestContext.authorizer nor in event.context.authorizer');
    }
    return claims;
}
