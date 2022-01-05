import { __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
export var eventStreamHandlingMiddleware = function (options) {
    return function (next, context) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = args.request;
                if (!HttpRequest.isInstance(request))
                    return [2, next(args)];
                return [2, options.eventStreamPayloadHandler.handle(next, args, context)];
            });
        }); };
    };
};
export var eventStreamHandlingMiddlewareOptions = {
    tags: ["EVENT_STREAM", "SIGNATURE", "HANDLE"],
    name: "eventStreamHandlingMiddleware",
    relation: "after",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
