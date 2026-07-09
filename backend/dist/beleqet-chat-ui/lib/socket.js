"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
const socket_io_client_1 = require("socket.io-client");
const API_URL = process.env.NEXT_PUBLIC_API_URL ??
    "https://YOUR_RENDER_BACKEND.onrender.com";
exports.socket = (0, socket_io_client_1.io)(`${API_URL}/chat`, {
    transports: ["websocket"],
    autoConnect: false,
    auth: {
        token: "",
    },
});
//# sourceMappingURL=socket.js.map