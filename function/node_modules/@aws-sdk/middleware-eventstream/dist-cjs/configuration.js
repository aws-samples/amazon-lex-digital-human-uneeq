"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveEventStreamConfig = void 0;
function resolveEventStreamConfig(input) {
    const eventSigner = input.signer;
    const eventStreamPayloadHandler = input.eventStreamPayloadHandlerProvider({
        ...input,
        eventSigner,
    });
    return {
        ...input,
        eventSigner,
        eventStreamPayloadHandler,
    };
}
exports.resolveEventStreamConfig = resolveEventStreamConfig;
