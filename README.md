# filescan-lambda
Accessibility filescan service running on AWS Lambda serverless

# Installation
## Prerequistes
* Terraform
* nodejs (12.X)
* AWS credentials set up in AWS config file
* php (optional)

## Install
* Copy ``terraform.tfvars.dist`` to ``terraform.tfvars`` and edit to add required information. 
* run "sh create.sh" to copy lambda function to AWS S3 and deploy Terraform infrastructure to AWS
* Note URL and API Key info output

## Updating
* run ``sh update.sh``
* URL and API key remain the same

# Test
## Node.js
* Set environmental variables for base URL and API Key as per output of the create.sh script:  

``export ACCESSIBILITY_URL=https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/test`` 

``export ACCESSIBILITY_APIKEY=xxxxxxxxxxxxxxxxxxxxxx``
* ``node ./test/js/testApi.js``

