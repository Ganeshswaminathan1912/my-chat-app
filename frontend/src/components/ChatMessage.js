import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className={`message ${message.user === 'You' ? 'sent' : 'received'}`}>
      <p>{message.text}</p>
      <span className="user">{message.user}</span>
    </div>
  );
};

export default ChatMessage;