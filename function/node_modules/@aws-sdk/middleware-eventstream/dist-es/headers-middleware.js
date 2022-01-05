import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
export var eventStreamHeaderMiddleware = function (next) { return function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var request;
    return __generator(this, function (_a) {
        request = args.request;
        if (!HttpRequest.isInstance(request))
            return [2, next(args)];
        request.headers = __assign(__assign({}, request.headers), { "Content-Type": "application/vnd.amazon.eventstream", "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS" });
        return [2, next(__assign(__assign({}, args), { request: request }))];
    });
}); }; };
export var eventStreamHeaderMiddlewareOptions = {
    step: "build",
    tags: ["EVENT_STREAM", "HEADER", "CONTENT_TYPE", "CONTENT_SHA256"],
    name: "eventStreamHeaderMiddleware",
    override: true,
};
