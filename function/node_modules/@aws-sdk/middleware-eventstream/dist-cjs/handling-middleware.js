"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventStreamHandlingMiddlewareOptions = exports.eventStreamHandlingMiddleware = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const eventStreamHandlingMiddleware = (options) => (next, context) => async (args) => {
    const { request } = args;
    if (!protocol_http_1.HttpRequest.isInstance(request))
        return next(args);
    return options.eventStreamPayloadHandler.handle(next, args, context);
};
exports.eventStreamHandlingMiddleware = eventStreamHandlingMiddleware;
exports.eventStreamHandlingMiddlewareOptions = {
    tags: ["EVENT_STREAM", "SIGNATURE", "HANDLE"],
    name: "eventStreamHandlingMiddleware",
    relation: "after",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
