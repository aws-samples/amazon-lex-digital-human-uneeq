# Amazon Lex and Digital Human Integration

This repository provides the supporting code to deploy the Amazon Lex and digital human integration as described in the blog "How to build integration between Amazon Lex and a Digital Human" %insert blog link here - TBD%

This code use the AWS SAM framework to deploy a simple API on AWS API Gateway and a Lambda function to call a defined Amazon Lex Bot.

Pre-reqs:

* An AWS Account
* AWS Serverless Application Model installed:
    - https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html
    - SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* An S3 bucket
* Access to AWS services:
    * AWS IAM
    * Amazon API Gateway
    * AWS Lambda
    * Amazon Lex
    * AWS CloudFormation
    * Amazon S3
    * AWS SAM (Serverless Application Model)

Steps:

1. Clone the repo
2. Install the node dependencies
3. Upload the Swagger file to an S3 bucket.
3. From the root of the repo run the below SAM command - ensure the S3 bucket name is updated and the LexBot Name & the LexBot Alias

###Install the node dependencies
```cd function && npm install && cd ..```

###Deploy the Application

```sam deploy --template-file template.yml --s3-bucket %S3BUCKETNAME% --stack-name %STACKNAME% --parameter-overrides pLexBotName=OrderFlowers_enAU pLexBotAlias=demo pS3BucketName=%S3BucketName% --capabilities CAPABILITY_NAMED_IAM```

When this command has completed the API, and Lambda function will have been deployed.

=======================

