import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgBtn from './assets/message.svg'
import Home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import send from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg' 
import { sendMsgToOpenAi } from './openai';
import { useState } from 'react';

function App() {
const [input ,setInput]=useState("");
  const handleSend=()=>{
    const res = sendMsgToOpenAi()
  }

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="log" />
            <span className="brand">ChatGPT </span>
          </div>
          <button className="midBtn"><img src={addBtn} alt="  " className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgBtn} alt="query" />What is Preograming?</button>
            <button className="query"><img src={msgBtn} alt="query" />How to Use An Api</button>
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
<div className="chat">
  <img src={userIcon} className='chatImg' alt="" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus praesentium nisi hic sit vel aliquam. Tempore ullam adipisci consectetur amet?</p>
</div>

<div className="chat bot">
  <img src={gptImgLogo} className='chatImg' alt="" /><p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio iusto assumenda perferendis iste? Aperiam numquam nam ullam assumenda ducimus in cumque quam, similique quaerat voluptates rerum inventore eum adipisci asperiores dolorum atque soluta delectus molestiae. Placeat fuga tempora quam, rem nulla culpa? Ut libero aut atque enim omnis labore officiis id nostrum culpa distinctio repudiandae dolorum accusantium beatae, quos, accusamus non modi natus doloremque autem, incidunt cupiditate. Natus cupiditate voluptas libero vero accusamus. Minus debitis, velit perferendis vitae dolorem architecto laborum labore placeat voluptas quisquam! Omnis vitae obcaecati, dolores facere quod voluptate beatae inventore corporis, laudantium et, dolorum quos odit?</p>
</div>

        </div>
        <div className="chatsFooter">
          <div className="inp">
            <input type="text" placeholder='send a message  ' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button className="send"><img src={send} alt="" /></button>
          </div>
          <p>ChatGPT My provide inaccurate output</p>
        </div> 

      </div>
    </div>
  );
}

export default App;
