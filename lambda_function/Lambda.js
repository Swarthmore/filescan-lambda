/**
 * @description Creates an interface for communicating with thee Filescan Lambda function
 * @param {*} params 
 * @param {string} params.apiBaseURL
 * @param {string} params.apiKey
 */
function Lambda(params) {
  const { apiBaseURL, apiKey } = params;

  if (!apiBaseURL) {
    throw new Error('Parameter apiBaseURL is required!');
  }

  if (!apiKey) {
    throw new Error('Parameter apiKey is required!');
  }

  this._apiBaseURL = apiBaseURL;
  this._apiKey = apiKey;
}

/**
 * @param {*} event
 * @param {*} context
 */
Lambda.prototype.handle = function(event, context) {}

/**
 * @param {string} url
 */
Lambda.prototype.getPresignedURL = function (url) {}

/**
 * @param {string} url
 * @param {string} key
 * @param {string} file
 */
Lambda.prototype.putFile = function (url, key, file) {}

/**
 * @param {string} url
 * @param {string} key
 */
Lambda.prototype.scanFile = function (url, key) {}

module.exports = Lambda;