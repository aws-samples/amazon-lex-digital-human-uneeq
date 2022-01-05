import { eventStreamHandlingMiddleware, eventStreamHandlingMiddlewareOptions } from "./handling-middleware";
import { eventStreamHeaderMiddleware, eventStreamHeaderMiddlewareOptions } from "./headers-middleware";
export var getEventStreamPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.addRelativeTo(eventStreamHandlingMiddleware(options), eventStreamHandlingMiddlewareOptions);
        clientStack.add(eventStreamHeaderMiddleware, eventStreamHeaderMiddlewareOptions);
    },
}); };
