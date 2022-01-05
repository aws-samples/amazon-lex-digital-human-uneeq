"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventStreamPayloadHandlerProvider = void 0;
const EventStreamPayloadHandler_1 = require("./EventStreamPayloadHandler");
const eventStreamPayloadHandlerProvider = (options) => new EventStreamPayloadHandler_1.EventStreamPayloadHandler(options);
exports.eventStreamPayloadHandlerProvider = eventStreamPayloadHandlerProvider;
