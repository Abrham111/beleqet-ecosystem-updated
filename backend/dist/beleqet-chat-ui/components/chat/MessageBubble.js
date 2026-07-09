"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MessageBubble;
const jsx_runtime_1 = require("react/jsx-runtime");
function MessageBubble({ message }) {
    const senderName = message.sender
        ? `${message.sender.firstName} ${message.sender.lastName}`
        : message.senderId;
    const time = message.createdAt
        ? new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        })
        : "";
    return ((0, jsx_runtime_1.jsx)("div", { className: "mb-4 flex justify-start", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-xs rounded-2xl bg-white px-4 py-3 shadow", children: [(0, jsx_runtime_1.jsx)("p", { className: "mb-1 text-xs font-semibold", children: senderName }), (0, jsx_runtime_1.jsx)("p", { children: message.content }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-2 flex items-center justify-end gap-2 text-xs text-gray-500", children: [(0, jsx_runtime_1.jsx)("span", { children: "\uD83D\uDD12" }), (0, jsx_runtime_1.jsx)("span", { children: time })] })] }) }));
}
//# sourceMappingURL=MessageBubble.js.map