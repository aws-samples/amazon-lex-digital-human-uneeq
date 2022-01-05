import { __assign } from "tslib";
import { Sha256 } from "@aws-crypto/sha256-js";
import { invalidFunction } from "@aws-sdk/invalid-dependency";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
export var getRuntimeConfig = function (config) {
    var _a, _b;
    var browserDefaults = getBrowserRuntimeConfig(config);
    return __assign(__assign(__assign({}, browserDefaults), config), { runtime: "react-native", eventStreamPayloadHandlerProvider: (_a = config === null || config === void 0 ? void 0 : config.eventStreamPayloadHandlerProvider) !== null && _a !== void 0 ? _a : (function () { return ({ handle: invalidFunction("event stream request is not supported in ReactNative.") }); }), sha256: (_b = config === null || config === void 0 ? void 0 : config.sha256) !== null && _b !== void 0 ? _b : Sha256 });
};
