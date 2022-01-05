import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { GetSessionRequest, GetSessionResponse } from "../models/models_0";
export interface GetSessionCommandInput extends GetSessionRequest {
}
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {
}
/**
 * <p>Returns session information for a specified bot, alias, and
 *          user.</p>
 *          <p>For example, you can use this operation to retrieve session
 *          information for a user that has left a long-running session in
 *          use.</p>
 *          <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2
 *          returns a <code>BadRequestException</code>. If the locale doesn't exist
 *          or is not enabled for the alias, you receive a
 *             <code>BadRequestException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, GetSessionCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, GetSessionCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for LexRuntimeV2Client's `config` shape.
 *
 */
export declare class GetSessionCommand extends $Command<GetSessionCommandInput, GetSessionCommandOutput, LexRuntimeV2ClientResolvedConfig> {
    readonly input: GetSessionCommandInput;
    constructor(input: GetSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexRuntimeV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSessionCommandInput, GetSessionCommandOutput>;
    private serialize;
    private deserialize;
}
