import attachment from './images/attachment.png';
import axios from 'axios';

import './chat.css';
import { useState } from 'react';

function inpput() {
  let val = document.getElementById('fileInput').value;
  document.getElementById('fileInput').value = ' ';
  return val;
}

const Chat = () => {
  // const [newchat, setNewchat] = useState();
  const sendMsg = () => {
    axios({
      method: 'post',
      url: '/api/pp',
      data: {
        id: 'user',
        msg: inpput(),
      },
    });
  };

  // const [msg, setMsg] = useState([{}]);
  // const chats = () => {
  //   axios
  //     .get('app/chats')
  //     .then((res) => {
  //       setMsg(res.data);
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log('Error::', err);
  //     });
  // };
  // useEffect(chats, []);

  const [cuser, setCuser] = useState('none');

  const user = () => {
    axios
      .get('/api/getuser')
      .then((res) => {
        setCuser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error::', err);
      });
  };
  user();

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <ResMsg />
        <ResMsg />
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." id="fileInput" />
        <img
          className="attachment-icon"
          src={attachment}
          alt="Attachment Icon"
        />
        <button onClick={sendMsg}>Send</button>
      </div>
    </div>
  );
};

const SentMsg = () => {
  return (
    <div className="message sender-message">
      <span className="sender-name">You</span>
      <span className="message-body">Hi! I'm good, thank you.</span>
      <span className="timestamp">12:35 PM</span>
    </div>
  );
};

const ResMsg = () => {
  return (
    <div className="message user-message">
      <span className="sender-name">Prince</span>
      <span className="message-body">Hi! How are you?</span>
      <span className="timestamp">12:30 PM</span>
    </div>
  );
};

export default Chat;
