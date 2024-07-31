import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import './App.css';

const socket = io('http://localhost:5000'); // Replace with your backend URL

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const sendMessage = (message) => {
    socket.emit('sendMessage', message);
    setMessages((prevMessages) => [...prevMessages, { user: 'You', text: message }]);
  };

  return (
    <div className="app">
      <ChatWindow messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;