import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';

function ChatForm() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const { sendMessage, lastMessage } = useWebSocket('ws://localhost:8080/chat', {
    onMessage: (message) => {
      setMessages((prevMessages) => [...prevMessages, message.data]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(userInput);
    setUserInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <h3>Messages:</h3>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default ChatForm;
