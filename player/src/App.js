import React, { useState } from 'react';
import Card from './Card';
import ChatMessage from './ChatMessage';
import './App.css';

const App = () => {
  const [cardMounted, setCardMounted] = useState(false);
  const [chatMounted, setChatMounted] = useState(false);
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the parent
    if (cardMounted && chatMounted) {
      setHighlight(true);
    } else {
      alert('Both components need to be mounted first!');
    }
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.card') && !e.target.closest('.chat-message')) {
      setHighlight(false);
    }
  };

  return (
    <div 
      className={`app-container ${highlight ? 'highlight' : ''}`}
      onClick={handleClickOutside}
    >
      <div className="button-container">
        <button onClick={handleHighlight}>Trigger Highlight</button>
      </div>
      <div className="content">
        <div className="left-panel">
          <Card onMount={() => setCardMounted(true)} />
        </div>
        <div className="right-panel">
          <ChatMessage onMount={() => setChatMounted(true)} highlightLastMessage={highlight} />
        </div>
      </div>
    </div>
  );
};

export default App;
