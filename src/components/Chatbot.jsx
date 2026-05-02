import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { IoClose, IoSend, IoExpand, IoContract } from 'react-icons/io5';
import { RiRobot2Fill } from 'react-icons/ri';

const QUICK_PROMPTS = [
  { label: 'His Skills',       full: 'What are Sriram\'s technical skills?' },
  { label: 'His Projects',     full: 'Tell me about Sriram\'s projects.' },
  { label: 'Work Experience',  full: 'What is Sriram\'s work experience?' },
  { label: 'Contact him',      full: 'How can I contact Sriram?' },
];

const PROMPTS = [
  "👋 Want to know more about me?",
  "💡 Curious about my skills?",
  "🚀 Want to know about my projects?",
  "🤖 Ask me anything about Sriram!",
  "💼 Want to know my work experience?",
  "📬 Want to get in touch with me?",
];

const SESSION_ID = '69f59839082079ea2b153ff3-dzkihw6puxl';
const AGENT_ID = '69f59839082079ea2b153ff3';
const USER_ID = 'sriram@lyzr.ai';
const API_KEY = 'sk-default-IjvgrZDhiW1wm1ydxpuKPEJrmcqxsx35';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showQuickPrompts, setShowQuickPrompts] = useState(true);
  const [promptIndex, setPromptIndex] = useState(0);
  const [showPrompt, setShowPrompt] = useState(true);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Sriram's AI assistant. Ask me anything about him — his skills, projects, experience, or anything else!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) { setShowPrompt(false); return; }
    setShowPrompt(true);
    const interval = setInterval(() => {
      setShowPrompt(false);
      setTimeout(() => {
        setPromptIndex(prev => (prev + 1) % PROMPTS.length);
        setShowPrompt(true);
      }, 400);
    }, 20000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const sendMessage = async (override) => {
    const text = (override ?? input).trim();
    if (!text || loading) return;

    setShowQuickPrompts(false);
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/stream/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify({
          user_id: USER_ID,
          agent_id: AGENT_ID,
          session_id: SESSION_ID,
          message: text,
        }),
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let botText = '';

      // Add empty bot message to stream into, hide typing dots
      setMessages(prev => [...prev, { role: 'bot', text: '' }]);
      setLoading(false);


      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter(l => l.trim());

        for (const line of lines) {
          // SSE format: "data: {...}"
          const raw = line.startsWith('data:') ? line.slice(5).trim() : line.trim();
          if (!raw || raw === '[DONE]') continue;

          try {
            const parsed = JSON.parse(raw);
            const token =
              parsed?.response ??
              parsed?.message ??
              parsed?.delta?.content ??
              parsed?.choices?.[0]?.delta?.content ??
              '';
            if (token) {
              botText += token;
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: 'bot', text: botText };
                return updated;
              });
            }
          } catch {
            // plain text chunk
            botText += raw;
            setMessages(prev => {
              const updated = [...prev];
              updated[updated.length - 1] = { role: 'bot', text: botText };
              return updated;
            });
          }
        }
      }

      if (!botText) {
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'bot', text: 'Sorry, I could not get a response.' };
          return updated;
        });
      }
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`fixed z-[9999] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-gray-700 transition-all duration-300 ${
              isExpanded
                ? 'bottom-0 right-0 w-full h-full rounded-none border-0 sm:bottom-5 sm:right-5 sm:w-[700px] sm:h-[85vh] sm:rounded-2xl sm:border'
                : 'bottom-24 right-5 w-[calc(100vw-40px)] sm:w-[400px] h-[520px]'
            }`}
            style={{ backgroundColor: '#0d0d0d' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-800" style={{ backgroundColor: '#111' }}>
              <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-black text-xl shrink-0"
                style={{ boxShadow: '0 0 12px rgba(0,255,77,0.5)' }}>
                <RiRobot2Fill />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Sriram's Assistant</p>
                <p className="text-green-400 text-xs">Ask me anything about Sriram</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => setIsExpanded(prev => !prev)}
                  className="text-gray-400 hover:text-green-400 transition text-lg p-1 rounded-lg hover:bg-gray-800"
                  title={isExpanded ? 'Collapse' : 'Expand'}
                >
                  {isExpanded ? <IoContract /> : <IoExpand />}
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-black text-sm shrink-0 mr-2 mt-1">
                      <RiRobot2Fill />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-green-500 text-black font-medium rounded-br-sm'
                        : 'bg-gray-800 text-gray-200 rounded-bl-sm'
                    }`}
                  >
                    {msg.role === 'bot' ? (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                          strong: ({ children }) => <strong className="text-green-400 font-semibold">{children}</strong>,
                          ul: ({ children }) => <ul className="list-disc pl-4 space-y-1">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal pl-4 space-y-1">{children}</ol>,
                          li: ({ children }) => <li>{children}</li>,
                          code: ({ children }) => <code className="bg-gray-700 px-1 rounded text-green-300 text-xs">{children}</code>,
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-green-400 underline underline-offset-2 hover:text-green-300 break-all transition"
                            >
                              {children}
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            </a>
                          ),
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex justify-start items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-black text-sm shrink-0">
                    <RiRobot2Fill />
                  </div>
                  <div className="bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Prompts 2x2 */}
            {showQuickPrompts && <div className="px-3 pt-2 pb-1 grid grid-cols-2 gap-2 border-t border-gray-800" style={{ backgroundColor: '#111' }}>
              {QUICK_PROMPTS.map((p, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setInput(p.full)}
                  onMouseLeave={() => setInput(prev => prev === p.full ? '' : prev)}
                  onClick={() => { setInput(''); setShowQuickPrompts(false); sendMessage(p.full); }}
                  className="text-xs px-3 py-2 rounded-xl border border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-400 hover:bg-gray-800 transition duration-200 text-center"
                >
                  {p.label}
                </button>
              ))}
            </div>}

            {/* Input */}
            <div className="px-3 py-3 flex items-center gap-2" style={{ backgroundColor: '#111' }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about Sriram..."
                className="flex-1 bg-gray-800 text-white text-sm px-4 py-2.5 rounded-xl outline-none placeholder-gray-500 border border-gray-700 focus:border-green-500 transition"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-black text-lg hover:bg-green-400 transition disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              >
                <IoSend />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Prompt Bubble */}
      <AnimatePresence>
        {!isOpen && showPrompt && (
          <motion.div
            key={promptIndex}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-5 z-[9998] flex items-center gap-2 px-4 py-2.5 rounded-2xl rounded-br-sm text-sm font-medium text-white max-w-[220px] cursor-pointer select-none"
            style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(0,255,77,0.3)', boxShadow: '0 0 16px rgba(0,255,77,0.15)' }}
            onClick={() => setIsOpen(true)}
          >
            <span className="flex-1 leading-snug">{PROMPTS[promptIndex]}</span>
            <button
              onClick={e => { e.stopPropagation(); setShowPrompt(false); }}
              className="text-gray-500 hover:text-white transition shrink-0 text-base"
            >
              <IoClose />
            </button>
            {/* Tail */}
            <span className="absolute -bottom-2 right-4 w-0 h-0"
              style={{ borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '8px solid rgba(0,255,77,0.3)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        style={{ display: isExpanded ? 'none' : 'flex', boxShadow: '0 0 24px rgba(0,255,77,0.5)' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-[9999] w-14 h-14 rounded-full bg-green-500 text-black items-center justify-center text-2xl shadow-lg"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <IoClose />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <RiRobot2Fill />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default Chatbot;
