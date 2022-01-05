import { FinalizeRequestMiddleware, RelativeMiddlewareOptions } from "@aws-sdk/types";
import { EventStreamResolvedConfig } from "./configuration";
export declare const eventStreamHandlingMiddleware: (options: EventStreamResolvedConfig) => FinalizeRequestMiddleware<any, any>;
export declare const eventStreamHandlingMiddlewareOptions: RelativeMiddlewareOptions;
