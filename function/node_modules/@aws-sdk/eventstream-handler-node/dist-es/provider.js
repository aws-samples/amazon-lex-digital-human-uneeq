import { EventStreamPayloadHandler } from "./EventStreamPayloadHandler";
export var eventStreamPayloadHandlerProvider = function (options) { return new EventStreamPayloadHandler(options); };
