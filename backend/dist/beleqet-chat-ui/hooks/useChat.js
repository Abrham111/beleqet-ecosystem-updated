"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChat = useChat;
const react_1 = require("react");
const socket_1 = require("@/lib/socket");
function useChat(roomId) {
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [connected, setConnected] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        socket_1.socket.connect();
        socket_1.socket.on("connect", () => {
            setConnected(true);
            socket_1.socket.emit("join_room", {
                roomId,
            });
        });
        socket_1.socket.on("disconnect", () => {
            setConnected(false);
        });
        socket_1.socket.on("room_history", (history) => {
            setMessages(history);
        });
        socket_1.socket.on("new_message", (message) => {
            setMessages((prev) => [...prev, message]);
        });
        return () => {
            socket_1.socket.off("connect");
            socket_1.socket.off("disconnect");
            socket_1.socket.off("room_history");
            socket_1.socket.off("new_message");
            socket_1.socket.disconnect();
        };
    }, [roomId]);
    const sendMessage = (content) => {
        socket_1.socket.emit("send_message", {
            roomId,
            content,
        });
    };
    return {
        connected,
        messages,
        sendMessage,
    };
}
//# sourceMappingURL=useChat.js.map