import { createContext, useContext, useState, ReactNode } from 'react';

interface ChatbotContextType {
  isChatbotEnabled: boolean;
  toggleChatbot: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isChatbotEnabled, setIsChatbotEnabled] = useState(true);

  const toggleChatbot = () => {
    setIsChatbotEnabled(prev => !prev);
  };

  return (
    <ChatbotContext.Provider value={{ isChatbotEnabled, toggleChatbot }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}
