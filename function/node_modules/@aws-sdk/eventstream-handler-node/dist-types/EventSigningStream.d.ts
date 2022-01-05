/// <reference types="node" />
import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import { EventSigner } from "@aws-sdk/types";
import { Transform, TransformCallback, TransformOptions } from "stream";
export interface EventSigningStreamOptions extends TransformOptions {
    priorSignature: string;
    eventSigner: EventSigner;
    eventMarshaller: EventMarshaller;
}
/**
 * A transform stream that signs the eventstream
 */
export declare class EventSigningStream extends Transform {
    private priorSignature;
    private eventSigner;
    private eventMarshaller;
    constructor(options: EventSigningStreamOptions);
    _transform(chunk: Uint8Array, encoding: string, callback: TransformCallback): Promise<void>;
}
