"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatWindow;
const jsx_runtime_1 = require("react/jsx-runtime");
const useChat_1 = require("@/hooks/useChat");
const ChatHeader_1 = require("./ChatHeader");
const MessageBubble_1 = require("./MessageBubble");
const MessageInput_1 = require("./MessageInput");
function ChatWindow() {
    const { messages, connected, sendMessage } = (0, useChat_1.useChat)("room-1");
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex h-[700px] w-full max-w-4xl flex-col overflow-hidden rounded-xl border bg-white shadow-lg", children: [(0, jsx_runtime_1.jsx)(ChatHeader_1.default, { connected: connected }), (0, jsx_runtime_1.jsx)("div", { className: "flex-1 overflow-y-auto bg-gray-50 p-6", children: messages.map((message) => ((0, jsx_runtime_1.jsx)(MessageBubble_1.default, { message: message }, message.id))) }), (0, jsx_runtime_1.jsx)(MessageInput_1.default, { sendMessage: sendMessage })] }));
}
//# sourceMappingURL=ChatWindow.js.map