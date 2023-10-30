import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgBtn  from './assets/message.svg'
import Home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'

function App() {
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

      </div>
    </div>
  );
}

export default App;
