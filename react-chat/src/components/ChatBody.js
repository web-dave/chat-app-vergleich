import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages, typingStatus, lastMessageRef }) => {
  const navigate = useNavigate();
  const currentUserName = localStorage.getItem('userName')

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="message__container">
        {messages.map((message) =>
          <div className="message__chats" key={message.id}>
            {message.name === currentUserName ? (
              <>
                <p className="sender__name">You</p>
                <div className="message__sender">
                  <p>{message.text}</p>
                </div>
              </>
            ) : (
              <>
                <p>{message.name}</p>
                <div className="message__recipient">
                  <p>{message.text}</p>
                </div>
              </>
            )}
          </div>
        )}

        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
