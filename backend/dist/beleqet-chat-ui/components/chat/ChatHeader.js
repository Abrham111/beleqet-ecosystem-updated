"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatHeader;
const jsx_runtime_1 = require("react/jsx-runtime");
function ChatHeader({ connected }) {
    return ((0, jsx_runtime_1.jsxs)("header", { className: "flex items-center justify-between border-b p-5", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-xl font-bold", children: "\uD83D\uDD12 Secure Tunnel" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-500", children: "AES-256-GCM Protected" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("div", { className: `h-3 w-3 rounded-full ${connected
                            ? "bg-green-500"
                            : "bg-red-500"}` }), (0, jsx_runtime_1.jsx)("span", { children: connected
                            ? "Connected"
                            : "Disconnected" })] })] }));
}
//# sourceMappingURL=ChatHeader.js.map