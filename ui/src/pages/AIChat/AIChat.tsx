import React, { useState, useRef, useEffect } from "react";
import 'AIChat.scss'

const AIChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "user" | "ai"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    setInput("");
    // Simulate AI response
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { sender: "ai", text: "This is a sample AI response." },
      ]);
    }, 800);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1000,
          borderRadius: "50%",
          width: 56,
          height: 56,
          background: "#1976d2",
          color: "#fff",
          border: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          fontSize: 28,
          cursor: "pointer",
        }}
        aria-label="Open chat"
      >
        💬
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 100,
            right: 32,
            width: 340,
            maxHeight: 480,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "#1976d2",
              color: "#fff",
              padding: "14px 18px",
              fontWeight: 600,
              fontSize: 18,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Ask AI Helper
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: 22,
                cursor: "pointer",
              }}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div
            ref={chatRef}
            style={{
              flex: 1,
              padding: 16,
              overflowY: "auto",
              background: "#f6f8fa",
              fontSize: 15,
            }}
          >
            {messages.length === 0 && (
              <div style={{ color: "#888", textAlign: "center", marginTop: 40 }}>
                How can I help you today?
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    background: msg.sender === "user" ? "#1976d2" : "#e3eafc",
                    color: msg.sender === "user" ? "#fff" : "#222",
                    borderRadius: 16,
                    padding: "8px 14px",
                    maxWidth: "75%",
                    fontSize: 15,
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              display: "flex",
              borderTop: "1px solid #e0e0e0",
              background: "#fff",
              padding: 8,
            }}
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 15,
                padding: "8px 10px",
                borderRadius: 8,
                background: "#f3f6fa",
                marginRight: 8,
              }}
            />
            <button
              type="submit"
              style={{
                background: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "0 18px",
                fontSize: 15,
                cursor: "pointer",
              }}
              disabled={!input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};
  
  export default AIChat