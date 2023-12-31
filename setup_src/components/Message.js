import React from "react";

const Message = () => {
  return (
    <div className={`chat-bubble`}>
      <img className="chat-bubble__left" src="" alt="user avatar" />
      <div className="chat-bubble__right">
        <p className="user-name">Deepak Kumar Yadav</p>
        <p className="user-message">
          We are building a real time chat app with React and Firebase.
        </p>
      </div>
    </div>
  );
};

export default Message;