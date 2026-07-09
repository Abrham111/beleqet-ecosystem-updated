export declare function useChat(roomId: string): {
    connected: boolean;
    messages: ChatMessage[];
    sendMessage: (content: string) => void;
};
