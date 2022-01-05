import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { PutSessionRequest, PutSessionResponse } from "../models/models_0";
export interface PutSessionCommandInput extends PutSessionRequest {
}
export interface PutSessionCommandOutput extends PutSessionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new session or modifies an existing session with an Amazon Lex V2
 *          bot. Use this operation to enable your application to set the state of
 *          the bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, PutSessionCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, PutSessionCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new PutSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSessionCommandInput} for command's `input` shape.
 * @see {@link PutSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for LexRuntimeV2Client's `config` shape.
 *
 */
export declare class PutSessionCommand extends $Command<PutSessionCommandInput, PutSessionCommandOutput, LexRuntimeV2ClientResolvedConfig> {
    readonly input: PutSessionCommandInput;
    constructor(input: PutSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexRuntimeV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutSessionCommandInput, PutSessionCommandOutput>;
    private serialize;
    private deserialize;
}
