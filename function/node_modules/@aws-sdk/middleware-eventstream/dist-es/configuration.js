import { __assign } from "tslib";
export function resolveEventStreamConfig(input) {
    var eventSigner = input.signer;
    var eventStreamPayloadHandler = input.eventStreamPayloadHandlerProvider(__assign(__assign({}, input), { eventSigner: eventSigner }));
    return __assign(__assign({}, input), { eventSigner: eventSigner, eventStreamPayloadHandler: eventStreamPayloadHandler });
}
