import { Logger as __Logger } from "@aws-sdk/types";
import { LexRuntimeV2ClientConfig } from "./LexRuntimeV2Client";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: LexRuntimeV2ClientConfig) => {
    apiVersion: string;
    disableHostPrefix: boolean;
    logger: __Logger;
    regionInfoProvider: import("@aws-sdk/types").RegionInfoProvider;
    serviceId: string;
    urlParser: import("@aws-sdk/types").UrlParser;
};
