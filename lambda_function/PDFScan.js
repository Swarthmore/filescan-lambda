const aws = require('aws-sdk');
const uuidv4 = require('uuid/v4');
const pdfjs = require('pdfjs-dist');
const fetch = require('node-fetch');
const lambdaResponse = require('./Responses');

const bucket = new AWS.S3();

const VERBOSE_NONE = 0;
const VERBOSE_ALL = 1;

// Keep track of the available endpoints
const ENDPOINTS = ['/requesturl', '/scan'];

/**
 * @description Creates an interface for communicating with thee Filescan Lambda function
 * @param {*} params 
 * @param {number} verbose=0
 */
function PDFScan(params) {
  const { verbose = VERBOSE_NONE } = params;
  this._verbose = verbose;
}

/**
 * @param {*} awsOpts
 * @param {func} [cb]
 */
PDFScan.prototype.configAws = function(awsOpts, cb = () => {}) {
  aws.config.update(awsOpts);
  cb();
}

/**
 * @param {*} event
 * @param {*} context
 */
PDFScan.prototype.handle = function(event, context) {
  
  const { path } = event;
  
  if (!path) {
    throw new Error('No path supplied!');
  }

  if (!ENDPOINTS.includes(path)) {
    throw new Error('Invalid path supplied: ', path);
  }

  switch(path) {
    case '/requesturl':
      break;
    case '/scan':
      break;
    default:
      break;
  }
}

/**
 * @param {string} url
 */
PDFScan.prototype.getPresignedURL = await function (url) {
    return new Promise((resolve, reject) => {
        try {
            const id = uuidv4();
            const s3Opts = {
                Bucket: process.env.bucketName,
                Key: id,
                ACL: 'public-read',
                Expires: 600
            }
            const uploadURL = s3.getSignedUrl('putObject', s3Opts);
            const resOpts = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                data: {
                    "uploadURL": uploadURL,
                    "key": id
                }
            }
            const res = lambdaResponse(resOpts);
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
}

/**
 * @param {string} url
 * @param {string} key
 * @param {string} file
 */
PDFScan.prototype.putFile = async function (url, key, file) {}

/**
 * @param {string} url
 * @param {string} key
 */
PDFScan.prototype.scanFile = function (url, key) {}

/**
 * @description Sends a response
 * @param {number} responseType
 */
PDFScan.prototype.respond = function(responeType) {}

module.exports = PDFScan;