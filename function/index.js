/******************
 
 * An AWS Lambda function that integrates Uneeq Digital Human with Amazon Lex.
 * [Digital Human]<--->[API Gateway]<--->[this AWS Lambda function]<--->[Amazon Lex]
 *
 * The AWS Lambda function must have the following environment variables configured:
 * 1. LEXBOT_ID - the Lex bot ID
 * 2. LEXBOT_ALIAS_ID - the Lex bot alias ID
 * 3. WELCOME_INTENT - the name of the welcome intent configured as aprt of the Lex bot
 * 4. LEXBOT_LOCALE_ID - the language and locale for the lex bot
 
 ******************/
 const uuid = require('uuid')
 const format = require('./utils/format.js')

 // Require aws module
 const AWS = require('aws-sdk')
 
exports.lambda_handler = async function(event) {
   console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2))
   console.info("EVENT\n" + JSON.stringify(event, null, 2))
   console.warn("Event has only been printed and not processed at this point.")

   const body = JSON.parse(event.body)
   console.log(body)
 
   const fmQuestion = body['fm-question'] //question asked by user
   const fmConversation = body['fm-conversation'] //string passed in previous response 'converationPayload'
   const fmAvatar = JSON.parse(body['fm-avatar']) //contextual information, 'type' is 'WELCOME' or 'QUESTION'
   const fmType = fmAvatar.type
   
   console.log("fmQuestionValue" + fmQuestion)
   console.log("fmConversationValue" + fmConversation)
   console.log("fmAvatar" + fmAvatar)
   console.log("fmType: " + fmType)
     
     let conversationPayload = {}
     let response = {}
     let params = {
         botAliasId: process.env.LEXBOT_ALIAS_ID,
         botId: process.env.LEXBOT_ID,
         localeId: process.env.LEXBOT_LOCALE_ID,
         sessionState: {},
     }
     
     console.log("PrintParams" + params)
     console.log("PrintResponse" + response)
     console.log("PrintConversationPayload" + conversationPayload)
     
    let lexruntimev2 = new AWS.LexRuntimeV2()

 switch (fmType) {
     case 'WELCOME':
         console.debug('Type is WELCOME')
         params.sessionId = uuid.v4(),
         params.sessionState.intent = {
                name: process.env.WELCOME_INTENT,
            }
            params.sessionState.dialogAction = {
                type: 'Delegate',
            }
         conversationPayload = { platformSessionId: params.sessionId }
 
         response = await lexruntimev2.putSession(params).promise()
         response.messages = await unzipMessages(response.messages)

         console.info('Got Lex putSession response')
         console.warn(`Raw Lex putSession response: ${JSON.stringify(response)}`)
         break
 
     case 'QUESTION':
         console.debug('Type is QUESTION')
         conversationPayload = JSON.parse(fmConversation)
         params.sessionId = conversationPayload.platformSessionId
          if (fmQuestion == '') {
            params.text = '.'
          } else {
            params.text = fmQuestion
          }

         response = await lexruntimev2.recognizeText(params).promise()
 
         console.info('Got Lex postText response')
         console.debug(`Raw Lex postText response: ${JSON.stringify(response)}`)
     }
     
     /* Parse the result and return */
    let { answer, instructions } = await parseResponse(response)
    return format.responseJSON(answer, instructions, conversationPayload)
    }

/**
 *
 * @param {object} response The response JSON from Lex
 * @return {string} answer and instructions (stringified JSON)
 */
 let parseResponse = async (response) => {
    let answer = ''
    let instructions = {}
    let customPayload = {}
    let foundFirstCustomPayload = false
    let containsSSML = false

    for (var i = 0; i < response.messages.length; i++) {
        switch(response.messages[i].contentType){
            case 'PlainText':
                answer += `${response.messages[i].content} `
                break
            case 'SSML':
                answer += `${response.messages[i].content.replace(/"/g, "'")} `
                containsSSML = true
                break
            case 'CustomPayload':
                if (!foundFirstCustomPayload) {
                    try {
                        customPayload = JSON.parse(response.messages[i].content.replace(/(\r\n|\n|\r)/gm, ''))
                        instructions = format.parseInstructions(JSON.stringify(customPayload.instructions))
                        foundFirstCustomPayload = true
                    } catch (error) {
                        logger.info(`Could not parse custom payload: ${response}`)
                    }
                } else {
                    logger.info(`Ignored additional custom payload: ${response}`)
                }
        }
    }
    
    if (!containsSSML) {
        answer = await format.parseAnswer(answer)
    }

    return { answer, instructions }
}

let unzipMessages = async (str) => {
    const { unzip } = require('zlib');
    const { promisify } = require('util');
    const do_unzip = promisify(unzip);

    const buffer = Buffer.from(str, 'base64');
    const resultBuff = await do_unzip(buffer);
  
    return JSON.parse(resultBuff.toString());
}