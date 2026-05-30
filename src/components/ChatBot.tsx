'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { marked } from 'marked';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: { metadata: string; similarity: number }[];
}

const SUGGESTED_QUESTIONS = [
  'What features do you offer?',
  'Tell me about GST billing',
  'How does karigar management work?',
  'What invoice types are supported?',
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeedDialOpen, setIsSpeedDialOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isPending, setIsPending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isPending]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const question = (text || input).trim();
    if (!question || isPending) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: question,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsPending(true);

    const assistantId = (Date.now() + 1).toString();
    
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: 'assistant', content: '' },
    ]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) throw new Error('Network error');

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          assistantContent += decoder.decode(value, { stream: true });
          
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantId
                ? { ...msg, content: assistantContent }
                : msg
            )
          );
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId && !msg.content
            ? { ...msg, content: 'Sorry, I encountered an error. Please try again.' }
            : msg
        )
      );
    } finally {
      setIsPending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* ─── Floating Toggle Button ─── */}
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed bottom-6 right-6 z-[99] flex flex-col items-end gap-3">
            {/* Speed Dial Options */}
            <AnimatePresence>
              {isSpeedDialOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="flex flex-col items-end gap-3 mb-2"
                >
                  {/* WhatsApp Option */}
                  <a
                    href="https://api.whatsapp.com/send?phone=919371123699&text=Hello%20DMD%20Gold%2C%20I%20would%20like%20to%20know%20more."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                    aria-label="Contact on WhatsApp"
                  >
                    <span className="bg-white text-[#2C2C2C] text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
                      WhatsApp
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.382 0 12.028c0 2.112.551 4.17 1.6 5.986L.045 23.951l6.101-1.601c1.761.947 3.754 1.447 5.885 1.447 6.645 0 12.032-5.384 12.032-12.029C24.063 5.382 18.676 0 12.031 0zm0 21.782c-1.841 0-3.644-.495-5.216-1.429l-.373-.221-3.877 1.018 1.036-3.777-.243-.386c-1.026-1.63-1.567-3.522-1.567-5.467 0-5.645 4.593-10.239 10.24-10.239 5.645 0 10.237 4.594 10.237 10.239 0 5.646-4.592 10.262-10.237 10.262zm5.63-7.662c-.309-.155-1.831-.904-2.115-1.008-.284-.105-.49-.155-.697.155-.207.309-.801 1.008-.98 1.213-.181.206-.359.232-.669.077-2.149-1.077-3.565-2.008-4.9-3.95-.18-.261 0-.395.155-.548.136-.134.309-.361.464-.542.155-.18.207-.309.309-.516.104-.207.051-.387-.025-.541-.078-.155-.697-1.68-.955-2.301-.252-.605-.506-.523-.697-.533-.18-.01-.387-.01-.593-.01-.207 0-.542.078-.826.387-.284.31-1.085 1.059-1.085 2.581 0 1.522 1.111 2.992 1.266 3.198.155.207 2.179 3.324 5.276 4.588 3.097 1.263 3.097.842 3.665.79.567-.052 1.831-.749 2.089-1.472.259-.724.259-1.343.181-1.472-.077-.13-.284-.207-.593-.362z"/></svg>
                    </div>
                  </a>

                  {/* AI Chat Option */}
                  <button
                    onClick={() => { setIsOpen(true); setIsSpeedDialOpen(false); }}
                    className="flex items-center gap-3 group"
                    aria-label="Open AI Chat"
                  >
                    <span className="bg-white text-[#2C2C2C] text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
                      AI Assistant
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#2C2C2C] text-white shadow-xl flex items-center justify-center hover:bg-[#C6A87C] transition-colors duration-300 cursor-pointer">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>
                    </div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={() => setIsSpeedDialOpen(!isSpeedDialOpen)}
              className="w-14 h-14 rounded-full bg-[#2C2C2C] text-[#C6A87C] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group cursor-pointer relative"
              aria-label="Contact options"
            >
              <div className="relative w-6 h-6">
                <svg className={`absolute inset-0 w-6 h-6 transition-transform duration-300 ${isSpeedDialOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                <svg className={`absolute inset-0 w-6 h-6 transition-transform duration-300 ${isSpeedDialOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              
              {!isSpeedDialOpen && (
                <span className="absolute right-full mr-3 bg-white text-[#2C2C2C] text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
                  Help & Contact
                </span>
              )}
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* ─── Chat Panel ─── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99] md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed z-[100] 
                bottom-0 left-0 right-0 h-[85vh]
                md:bottom-6 md:right-6 md:left-auto md:h-auto md:w-[420px] md:max-h-[600px] md:rounded-3xl
                bg-white shadow-2xl flex flex-col overflow-hidden
                border border-[#C6A87C]/20
                rounded-t-3xl"
            >
              {/* ─── Header ─── */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-[#2C2C2C] to-[#3a3a3a]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center p-1">
                    <img src="/images/logo.png" alt="DMD Gold Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">DMD Gold AI</h3>
                    <p className="text-gray-400 text-[10px] tracking-wide uppercase">Ask anything about our platform</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full cursor-pointer"
                  aria-label="Close chat"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* ─── Messages Area ─── */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#FAF9F6] min-h-0">
                {/* Welcome message */}
                {messages.length === 0 && !isPending && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100 max-w-[90%]">
                      <p className="text-sm text-[#2C2C2C] leading-relaxed">
                        👋 Namaste! I&apos;m the <span className="font-bold text-[#C6A87C]">DMD Gold AI Assistant</span>. Ask me anything about our jewellery management platform — features, invoicing, karigar management, and more!
                      </p>
                    </div>

                    {/* Suggested questions */}
                    <div className="space-y-2">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold px-1">Try asking</p>
                      <div className="flex flex-wrap gap-2">
                        {SUGGESTED_QUESTIONS.map((q) => (
                          <button
                            key={q}
                            onClick={() => handleSend(q)}
                            className="text-xs bg-white border border-[#C6A87C]/20 text-[#2C2C2C] px-3 py-1.5 rounded-full hover:bg-[#C6A87C]/10 hover:border-[#C6A87C]/40 transition-all cursor-pointer"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Chat messages */}
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-[#2C2C2C] text-white rounded-br-sm'
                          : 'bg-white text-[#2C2C2C] rounded-tl-sm shadow-sm border border-gray-100'
                      }`}
                    >
                      {/* Render markdown message */}
                      <div
                        className="[&_strong]:font-bold [&_ul]:list-disc [&_ul]:ml-4 [&_ol]:list-decimal [&_ol]:ml-4 [&_p]:mb-2 [&_p:last-child]:mb-0 [&_a]:text-blue-500 [&_a]:underline"
                        dangerouslySetInnerHTML={{ __html: marked.parse(msg.content) as string }}
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isPending && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-[#C6A87C] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-[#C6A87C] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-[#C6A87C] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* ─── Input Area ─── */}
              <div className="px-4 py-3 border-t border-gray-100 bg-white">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about DMD Gold..."
                    disabled={isPending}
                    className="flex-1 bg-[#FAF9F6] rounded-full px-4 py-2.5 text-sm text-[#2C2C2C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6A87C]/30 border border-gray-100 focus:border-[#C6A87C]/50 transition-all disabled:opacity-50"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={!input.trim() || isPending}
                    className="w-10 h-10 rounded-full bg-[#2C2C2C] text-white flex items-center justify-center hover:bg-[#C6A87C] transition-colors disabled:opacity-30 disabled:hover:bg-[#2C2C2C] flex-shrink-0 cursor-pointer"
                    aria-label="Send message"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </div>
                <p className="text-[9px] text-gray-300 text-center mt-2 tracking-wide">
                  Powered by AI • Answers sourced from DMD Gold documentation
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
