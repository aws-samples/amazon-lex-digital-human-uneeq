"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LexRuntimeV2 = void 0;
const DeleteSessionCommand_1 = require("./commands/DeleteSessionCommand");
const GetSessionCommand_1 = require("./commands/GetSessionCommand");
const PutSessionCommand_1 = require("./commands/PutSessionCommand");
const RecognizeTextCommand_1 = require("./commands/RecognizeTextCommand");
const RecognizeUtteranceCommand_1 = require("./commands/RecognizeUtteranceCommand");
const StartConversationCommand_1 = require("./commands/StartConversationCommand");
const LexRuntimeV2Client_1 = require("./LexRuntimeV2Client");
class LexRuntimeV2 extends LexRuntimeV2Client_1.LexRuntimeV2Client {
    deleteSession(args, optionsOrCb, cb) {
        const command = new DeleteSessionCommand_1.DeleteSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSession(args, optionsOrCb, cb) {
        const command = new GetSessionCommand_1.GetSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putSession(args, optionsOrCb, cb) {
        const command = new PutSessionCommand_1.PutSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    recognizeText(args, optionsOrCb, cb) {
        const command = new RecognizeTextCommand_1.RecognizeTextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    recognizeUtterance(args, optionsOrCb, cb) {
        const command = new RecognizeUtteranceCommand_1.RecognizeUtteranceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startConversation(args, optionsOrCb, cb) {
        const command = new StartConversationCommand_1.StartConversationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.LexRuntimeV2 = LexRuntimeV2;
