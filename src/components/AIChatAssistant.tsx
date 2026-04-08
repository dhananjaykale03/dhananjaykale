import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, RotateCcw, Moon, Sun } from "lucide-react";
import OpenAI from "openai";
import { useTheme } from "next-themes";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const AIChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "👋 Hey, I'm Dhananjay’s AI Portfolio Assistant! Ask me anything — about his projects, skills, or even fun facts!",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const { theme, setTheme } = useTheme();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", content: input.trim() };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        const fullMessages = [
            {
                role: "system",
                content: `
You are **Dhananjay Kale’s personal Portfolio AI assistant** — the friendly, helpful guide in his portfolio.
You know everything about him: his projects, skills, hobbies, and goals.
Always answer conversationally and warmly. Never refuse to answer general questions.

### Dhananjay’s Profile:
- Full Name: Dhananjay Kale
- Profession: Full-Stack Developer (MERN)
- Skills: Html/Css, Javascript, React, Node.js, MongoDB, Tailwind CSS, JWT, REST APIs, animations.
- Projects:
  1. CalorieScan — AI food scanner for calories/macros.
  2. Portfolio — modern animated personal site.
  3. Secure Login System — full auth with MongoDB + JWT.
- Education: Computer Science (Full Stack Focus)
- Strengths: Clean UI, performance, creativity, teamwork.
- Tools: Git, VS Code, Postman, MongoDB Atlas, Express, Vite.
- Contact: dhananjaykale095@gmail.com
- GitHub: github.com/DhananjayKale095
- Hobbies: Tea ☕, coding, music 🎵, AI tools 🤖, photography 📸.

### Tone:
Be helpful, friendly, confident, and short. You can also answer fun, creative, or random questions.
        `,
            },
            ...messages,
            userMsg,
        ];

        try {
            const res = await openai.chat.completions.create({
                model: "gpt-5-nano",
                messages: fullMessages,
            });

            const aiReply =
                res.choices?.[0]?.message?.content ||
                "⚠️ Sorry, I couldn't find an answer.";
            setMessages((prev) => [...prev, { role: "assistant", content: aiReply }]);
        } catch (error) {
            console.error("OpenAI Error:", error);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "⚠️ Something went wrong. Please try again in a moment.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const clearChat = () => {
        setMessages([
            {
                role: "assistant",
                content:
                    "🧹 All clear! let’s start a new conversation. 👋 — I'm ready to help",
            },
        ]);
    };

    // Dark mode detection for Tailwind styling
    const isDark = theme === "dark";

    return (
        <div>
            {/* Floating Chat Button */}
            <button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 bg-gradient-to-r  shadow-lg hover:scale-110 transition"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>

            {/* Chat Box */}
            {isOpen && (
                <div
                    className={`fixed bottom-20 right-6 w-80 max-h-[500px] flex flex-col rounded-2xl shadow-xl border
                    ${isDark ? "bg-gray-900 border-gray-700 text-gray-100" : "bg-white border-gray-200 text-gray-900"}
                    overflow-hidden transition-all`}
                >
                    {/* Header */}
                    <div
                        className="flex justify-between items-center p-3
                                   bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-white text-sm font-semibold"
                    >
                        <span>Portfolio Assistant 🤖</span>
                        <button onClick={clearChat} title="Clear Chat">
                            <RotateCcw size={16} />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 overflow-y-auto p-3 space-y-3">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded-lg text-sm max-w-[85%] ${
                                    msg.role === "user"
                                        ? "bg-indigo-500 text-white ml-auto"
                                        : isDark
                                            ? "bg-gray-800 text-gray-200"
                                            : "bg-gray-100 text-gray-800"
                                }`}
                            >
                                {msg.content}
                            </div>
                        ))}
                        {loading && (
                            <div className="text-gray-400 text-sm italic animate-pulse">
                                Typing...
                            </div>
                        )}
                        <div ref={messagesEndRef} /> {/* 👈 auto-scroll anchor */}
                    </div>

                    {/* Input */}
                    <div
                        className={`flex p-3 border-t ${
                            isDark ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-gray-50"
                        }`}
                    >
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Ask me anything..."
                            className={`flex-1 rounded-lg p-2 text-sm focus:outline-none ${
                                isDark
                                    ? "bg-gray-700 text-gray-100 placeholder-gray-400"
                                    : "bg-white text-gray-900 placeholder-gray-500"
                            }`}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading}
                            className="ml-2 bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 transition"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIChatAssistant;
