import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { RecognizeTextRequest, RecognizeTextResponse } from "../models/models_0";
export interface RecognizeTextCommandInput extends RecognizeTextRequest {
}
export interface RecognizeTextCommandOutput extends RecognizeTextResponse, __MetadataBearer {
}
/**
 * <p>Sends user input to Amazon Lex V2. Client applications use this API to send
 *          requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input
 *          using the machine learning model that it build for the bot.</p>
 *          <p>In response, Amazon Lex V2 returns the next message to convey to the user
 *          and an optional response card to display.</p>
 *          <p>If the optional post-fulfillment response is specified, the messages
 *          are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Success message</b> - Returned if
 *                the Lambda function completes successfully and the intent state is
 *                fulfilled or ready fulfillment if the message is present.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Failed message</b> - The failed
 *                message is returned if the Lambda function throws an exception or
 *                if the Lambda function returns a failed intent state without a
 *                message.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Timeout message</b> - If you
 *                don't configure a timeout message and a timeout, and the Lambda
 *                function doesn't return within 30 seconds, the timeout message is
 *                returned. If you configure a timeout, the timeout message is
 *                returned when the period times out. </p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, RecognizeTextCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, RecognizeTextCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new RecognizeTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RecognizeTextCommandInput} for command's `input` shape.
 * @see {@link RecognizeTextCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for LexRuntimeV2Client's `config` shape.
 *
 */
export declare class RecognizeTextCommand extends $Command<RecognizeTextCommandInput, RecognizeTextCommandOutput, LexRuntimeV2ClientResolvedConfig> {
    readonly input: RecognizeTextCommandInput;
    constructor(input: RecognizeTextCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexRuntimeV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RecognizeTextCommandInput, RecognizeTextCommandOutput>;
    private serialize;
    private deserialize;
}
