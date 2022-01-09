/******************
 
 * An AWS Lambda function that integrates Uneeq Digital Human with Amazon Lex.
 * [Digital Human]<--->[API Gateway]<--->[this AWS Lambda function]<--->[Amazon Lex]
 *
 * The AWS Lambda function must have the following environment variables configured:
 * 1. LEXBOT_NAME - the name of the Amazon Lex bot
 * 2. LEXBOT_ALIAS - the name of the Amazon Lex bot alias
 * 3. WELCOME_INTENT - the name of the welcome intent configured as aprt of the Lex bot
 
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
   const fmType = fmAvatar['type']
   
   console.log("fmQuestionValue" + fmQuestion)
   console.log("fmConversationValue" + fmConversation)
   console.log("fmAvatar" + fmAvatar)
   console.log("fmType: " + fmType)
     
     let conversationPayload = {}
     let response = {}
     let params = {
         botAlias: process.env.LEXBOT_ALIAS,
         botName: process.env.LEXBOT_NAME,
         sessionAttributes: {},
     }
     
     console.log("PrintParams" + params)
     console.log("PrintResponse" + response)
     console.log("PrintConversationPayload" + conversationPayload)
     
 let lexruntime = new AWS.LexRuntime()
 switch (fmType) {
     case 'WELCOME':
         console.debug('Type is WELCOME')
         params.userId = uuid.v4()
         params.accept = 'text/plain; charset=utf-8'
         params.dialogAction = {
             intentName: process.env.WELCOME_INTENT,
             type: 'Delegate',
         }
         conversationPayload = { platformSessionId: params.userId }
 
         response = await lexruntime.putSession(params).promise()
 
         console.info('Got Lex putSession response')
         console.warn(`Raw Lex putSession response: ${JSON.stringify(response)}`)
         break
 
     case 'QUESTION':
         console.debug('Type is QUESTION')
         conversationPayload = JSON.parse(fmConversation)
         params.userId = conversationPayload.platformSessionId
         if (fmQuestion == '') {
             params.inputText = '.'
         } else {
             params.inputText = fmQuestion
         }
 
         response = await lexruntime.postText(params).promise()
 
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

    switch (response.messageFormat) {
        case 'PlainText':
            answer = await format.parseAnswer(response.message)
            break
        case 'SSML':
            answer = response.message
            break
        case 'Composite':
            let compositeMessage = JSON.parse(response.message)
            var message = {}
            for (var i = 0; i < compositeMessage.messages.length; i++) {
                message = compositeMessage.messages[i]

                switch (message.type) {
                    case 'PlainText':
                        answer += `${message.value} `
                        break
                    case 'SSML':
                        answer += `${message.value.replace(/"/g, "'")} `
                        containsSSML = true
                        break
                    case 'CustomPayload':
                        if (!foundFirstCustomPayload) {
                            try {
                                customPayload = JSON.parse(message.value.replace(/(\r\n|\n|\r)/gm, ''))
                                instructions = format.parseInstructions(customPayload.instructions)
                                foundFirstCustomPayload = true
                            } catch (error) {
                                console.info(`Could not parse custom payload: ${response}`)
                            }
                        } else {
                            console.info(`Ignored additional custom payload: ${response}`)
                        }
                }
            }
            if (!containsSSML) {
                answer = await format.parseAnswer(answer)
            }
    }

    return { answer, instructions }
}
