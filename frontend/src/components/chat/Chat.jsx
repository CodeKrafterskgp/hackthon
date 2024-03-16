import attachment from './images/attachment.png';

import './chat.css';

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <SentMsg />
        <ResMsg />
        <ResMsg />
        <SentMsg />
        <SentMsg />
        <ResMsg />
        <SentMsg />
        <ResMsg />
        <ResMsg />
        <ResMsg />
        <SentMsg />
        <SentMsg />
        <ResMsg />
        <SentMsg />
        <ResMsg />
        <ResMsg />
        <ResMsg />
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <img
          className="attachment-icon"
          src={attachment}
          alt="Attachment Icon"
        />
        <input type="file" id="fileInput" style={{ display: 'none' }} />
        <button>Send</button>
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
