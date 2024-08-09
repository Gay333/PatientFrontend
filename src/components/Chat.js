import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';
import './chat.css';

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
        <br/>
        <br/>
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

/*
import React, { useState } from 'react';
import './chat.css'; // Make sure to import your CSS file
import useWebSocket from 'react-use-websocket';

const Chat = () => {
  const [message, setMessage] = useState('');
  //const [messages, setMessages] = useState([]);
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
    <div className="chat-page">
      <div className="chat-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>

        <div className="messages">
          <h3>Messages:</h3>
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Chat;
*/