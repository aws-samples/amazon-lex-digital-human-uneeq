import { Decoder, Encoder, EventSigner, EventStreamPayloadHandler as IEventStreamPayloadHandler, FinalizeHandler, FinalizeHandlerArguments, FinalizeHandlerOutput, HandlerExecutionContext, MetadataBearer, Provider } from "@aws-sdk/types";
export interface EventStreamPayloadHandlerOptions {
    eventSigner: Provider<EventSigner>;
    utf8Encoder: Encoder;
    utf8Decoder: Decoder;
}
/**
 * A handler that control the eventstream payload flow:
 * 1. Pause stream for initial attempt.
 * 2. Close the stream is attempt fails.
 * 3. Start piping payload when connection is established.
 * 4. Sign the payload after payload stream starting to flow.
 */
export declare class EventStreamPayloadHandler implements IEventStreamPayloadHandler {
    private readonly eventSigner;
    private readonly eventMarshaller;
    constructor(options: EventStreamPayloadHandlerOptions);
    handle<T extends MetadataBearer>(next: FinalizeHandler<any, T>, args: FinalizeHandlerArguments<any>, context?: HandlerExecutionContext): Promise<FinalizeHandlerOutput<T>>;
}
