// src/components/Chatbot.js
import React, { useState, useRef, useEffect } from 'react';

function BotIcon({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#fff" />
      <rect x="7" y="10" width="10" height="6" rx="3" fill="#4f8cff" />
      <circle cx="9" cy="13" r="1" fill="#fff" />
      <circle cx="15" cy="13" r="1" fill="#fff" />
      <rect x="11" y="6" width="2" height="4" rx="1" fill="#4f8cff" />
    </svg>
  );
}
function UserIcon({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" fill="#a3e635" />
      <rect x="6" y="14" width="12" height="6" rx="3" fill="#a3e635" />
    </svg>
  );
}
function SendIcon({ className = "" }) {
  return (
    <svg className={className} width="18" height="18" fill="none" viewBox="0 0 24 24">
      <path d="M3 20l18-8-18-8v7l15 1-15 1v7z" fill="currentColor" />
    </svg>
  );
}
function MessageCircleIcon({ className = "" }) {
  return (
    <svg className={className} width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M21 11.5a8.38 8.38 0 01-1.9 5.4A8.5 8.5 0 013.5 12a8.5 8.5 0 0115.6-5.4A8.38 8.38 0 0121 11.5z" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Backend call (replace with your API)
  const sendToBackend = async (userMessage) => {
    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      const data = await res.json();
      return data.answer || "Sorry, I couldn't get a response.";
    } catch {
      return "Sorry, kuch masla ho gaya.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Backend se response lo
    const botText = await sendToBackend(inputValue);

    const botResponse = {
      id: (Date.now() + 1).toString(),
      text: botText,
      sender: 'bot',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-lime-400 hover:bg-lime-500 text-gray-700 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
        >
          <MessageCircleIcon className="w-6 h-6" />
          <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            1
          </div>
          <div className="absolute bottom-full right-0 mb-2 bg-gray-700 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Chat with us!
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl z-50 transition-all duration-300 flex flex-col ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
        } max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]`}>
          
          {/* Header */}
          <div className="bg-gray-700 text-white p-4 rounded-t-2xl flex items-center justify-between flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="bg-lime-400 p-2 rounded-full">
                <BotIcon className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI Assistant</h3>
                <p className="text-sm text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-2 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-1"
              >
                {isMinimized ? (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor"/></svg>
                ) : (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor"/><rect x="11" y="4" width="2" height="16" rx="1" fill="currentColor"/></svg>
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-1"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2"/><line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2"/></svg>
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Container */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 min-h-0">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`p-2 rounded-full flex-shrink-0 ${
                          message.sender === 'user' 
                            ? 'bg-lime-400' 
                            : 'bg-gray-700'
                        }`}>
                          {message.sender === 'user' ? (
                            <UserIcon className="w-4 h-4 text-gray-700" />
                          ) : (
                            <BotIcon className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`rounded-2xl px-4 py-3 ${
                          message.sender === 'user'
                            ? 'bg-lime-400 text-gray-700'
                            : 'bg-white text-gray-700 border border-gray-200'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-gray-600' : 'text-gray-500'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2 max-w-[80%]">
                        <div className="p-2 rounded-full bg-gray-700 flex-shrink-0">
                          <BotIcon className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white text-gray-700 border border-gray-200 rounded-2xl px-4 py-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-lime-400 hover:bg-lime-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-700 p-2 rounded-full transition-all duration-200 hover:scale-105 flex-shrink-0"
                  >
                    <SendIcon className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Press Enter to send • Powered by AI
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}