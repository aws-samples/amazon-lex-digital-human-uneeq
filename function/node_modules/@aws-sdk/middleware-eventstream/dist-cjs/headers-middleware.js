"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventStreamHeaderMiddlewareOptions = exports.eventStreamHeaderMiddleware = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const eventStreamHeaderMiddleware = (next) => async (args) => {
    const { request } = args;
    if (!protocol_http_1.HttpRequest.isInstance(request))
        return next(args);
    request.headers = {
        ...request.headers,
        "Content-Type": "application/vnd.amazon.eventstream",
        "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS",
    };
    return next({
        ...args,
        request,
    });
};
exports.eventStreamHeaderMiddleware = eventStreamHeaderMiddleware;
exports.eventStreamHeaderMiddlewareOptions = {
    step: "build",
    tags: ["EVENT_STREAM", "HEADER", "CONTENT_TYPE", "CONTENT_SHA256"],
    name: "eventStreamHeaderMiddleware",
    override: true,
};
