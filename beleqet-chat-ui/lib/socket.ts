import { io, Socket } from "socket.io-client";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "https://YOUR_RENDER_BACKEND.onrender.com";

export const socket: Socket = io(`${API_URL}/chat`, {
  transports: ["websocket"],

  autoConnect: false,

  auth: {
    token: "",
  },
});