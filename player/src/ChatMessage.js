import React, { useEffect } from 'react';

const ChatMessage = ({ onMount, highlightLastMessage }) => {
  useEffect(() => {
    onMount();
  }, [onMount]);

  const messages = Array.from({ length: 10 }, (_, i) => `Message ${i + 1}`);

  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`chat-message ${highlightLastMessage && index === messages.length - 1 ? 'highlighted' : ''}`}
        >
          {message}
        </div>
      ))}
    </div>
  );
};

export default ChatMessage;
