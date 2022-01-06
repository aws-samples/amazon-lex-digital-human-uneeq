# Amazon Lex v2 and Digital Human Integration

This repository provides the supporting code to deploy Amazon Lex v2 and digital human integration as described in the blog **Build an integration between Amazon Lex 2 and a digital human**

This code uses the AWS SAM Framework to deploy a simple API on AWS API Gateway and a Lambda function to call a defined Amazon Lex v2 Bot.

### Pre-reqs:

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

### Steps:

1. Clone the repository
2. Install the node dependencies
3. Upload the Swagger file to an S3 bucket
4. From the root of the repo run the below commands - ensure the parameters for the **S3BucketName** the **LexBotID** and the **LexBotAliasID** are updated

### Install the node dependencies
```cd function && npm install && cd ..```

### Upload the Swagger file to S3
```aws s3 cp swagger.yaml s3://%S3BUCKETNAME%/swagger.yaml```

### Deploy the Serverless Application

```sam deploy --template-file template.yml --s3-bucket %S3BUCKETNAME% --stack-name %STACKNAME% --parameter-overrides pLexBotID=%LexV2BotID% pLexBotAliasID=%AliasID% pWelcomeIntentName=Welcome pLocaleID=en_AU pS3BucketName=%S3BucketName% --capabilities CAPABILITY_NAMED_IAM```

When this command has completed the API, and Lambda function will have been deployed.

=======================

