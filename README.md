# digi_human_lex_blog

Deploys API GW, Lambda to call a Lex Bot.

Use the AWS SAM framework.
SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

Pre-reqs:
A test Lex bot in place with the required Welcome Intent and an intent to with a defined question

Steps
1. Clone the repo
2. Ensure the dependencies are installed within the 'function' directory
3. Upload the Swagger file to an S3 bucket.
3. From the root of the repo run the below SAM command - ensure the S3 bucket name is updated and the LexBot Name & the LexBot Alias

```cd function && npm install && cd ..```

and then 

```
sam deploy --template-file template.yml --s3-bucket %S3BUCKETNAME% --stack-name %STACKNAME% --parameter-overrides pLexBotName=OrderFlowers_enAU pLexBotAlias=demo pS3BucketName=%S3BucketName% --capabilities CAPABILITY_NAMED_IAM
```

When this command has completed the API, and Lambda function will have been deployed.



=======================

