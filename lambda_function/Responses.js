module.exports = function(params) {
    const { statusCode, data = null, message = null, error = null, headers = {} } = params;
    const response = {};

    response.statusCode = statusCode;
    response.headers = headers;

    if (statusCode >= 200 && statusCode <= 299) {
        if (data) {
            response.body = {};
            response.body.data = data
        }
    }

    if (statusCode <= 200 && statusCode > 0 || statusCode >= 400 < 500) {
        if (!message) {
            throw new Error(`Message must be provided if statusCode is ${statusCode}`);
        }
        response.body = {};
        response.body.message = message
    }

    if (statusCode > 500) {
        if (!error) {
            throw new Error(`Error must be provided if statusCode is ${statusCode}`)
        }
        response.error = error
    }
    return response;
}