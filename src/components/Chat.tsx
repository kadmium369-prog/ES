import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Loader2, Leaf } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { GoogleGenAI } from "@google/genai";
import { cn } from '@/src/lib/utils';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const SYSTEM_INSTRUCTION = `
You are the EarthShapers AI Assistant, a specialized guide for a sustainable design cooperative.
Your goal is to help visitors understand EarthShapers' mission and provide advice on sustainable design.

Core Values:
- Sustainability: Every design must respect the planet.
- Cooperation: We work together as a community.
- Innovation: Using new materials and methods for better impact.

Services:
- Eco-Architecture: Designing buildings that breathe.
- Circular Furniture: Products designed to be disassembled and recycled.
- Urban Permaculture: Integrating nature into city spaces.

Tone: Professional, warm, inspiring, and deeply knowledgeable about ecology and design.
Language: Respond in the language the user uses (default to English).
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I am the EarthShapers assistant. How can I help you with your sustainable design project today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: { systemInstruction: SYSTEM_INSTRUCTION },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: result.text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-earth-olive text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">
            Need help?
          </span>
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-white w-[380px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-earth-olive/10 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-earth-olive p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Leaf size={20} className="text-earth-cream" />
              <h3 className="font-serif font-medium">EarthShapers Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-earth-cream/30">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-col max-w-[85%] rounded-2xl p-3 text-sm",
                  msg.role === 'user' 
                    ? "ml-auto bg-earth-olive text-white rounded-tr-none" 
                    : "bg-white text-earth-ink shadow-sm rounded-tl-none border border-earth-olive/5"
                )}
              >
                <div className="prose prose-sm max-w-none prose-p:leading-relaxed">
                  <ReactMarkdown>
                    {msg.text}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="bg-white text-earth-ink shadow-sm rounded-2xl rounded-tl-none border border-earth-olive/5 p-3 w-fit">
                <Loader2 size={16} className="animate-spin text-earth-olive" />
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-earth-olive/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask your question..."
              className="flex-1 bg-earth-cream/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-earth-olive/20"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-earth-olive text-white p-2 rounded-full disabled:opacity-50 hover:bg-earth-olive/90 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
