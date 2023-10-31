import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgBtn from './assets/message.svg';
import Home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import send from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAi } from './openai';
import { useEffect, useRef, useState } from 'react';

function App() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([
    {
      text: 'hi, I am ChatGPT',
      isBot: true,
    },
  ]);

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessage([
      ...messages,
      {
        text,
        isBot: false,
      },
    ]);

    const res = await sendMsgToOpenAi(text);
    setMessage([
      ...messages,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  const handleEnter = async (e) => {
    if (e.key === 'Enter') await handleSend();
  };

  const handleQuery = async (query) => {
    setMessage([
      ...messages,
      { text: query, isBot: false },
    ]);

    const res = await sendMsgToOpenAi(query);
    setMessage([
      ...messages,
      { text: res, isBot: true },
    ]);
  };

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="log" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn" onClick={() => window.location.reload()}>
            <img src={addBtn} alt="  " className="addBtn" />New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query" onClick={() => handleQuery("What is Programming?")}>
              <img src={msgBtn} alt="query" />What is Programming?
            </button>
            <button className="query" onClick={() => handleQuery("How to Use an API")}>
              <img src={msgBtn} alt="query" />How to Use an API
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={Home} alt="" className="listItemsImg" />
            Home
          </div>

          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Save
          </div>

          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {messages.map((message, i) => (
            <div key={i} className={message.isBot ? "chat bot" : "chat"}>
              <img src={message.isBot ? gptImgLogo : userIcon} className="chatImg" alt="" />
              <p className="txt">{message.text}</p>
            </div>
          ))}
          <div ref={msgEnd} />
        </div>
        <div className="chatsFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyPress={handleEnter}
            />
            <button className="send" onClick={handleSend}>
              <img src={send} alt="" />
            </button>
          </div>
          <p>ChatGPT My provide inaccurate output</p>
        </div>
      </div>
    </div>
  );
}

export default App;
