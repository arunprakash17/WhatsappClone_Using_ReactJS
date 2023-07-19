import React from 'react'
import Sidebar from './Sidebar';
import './ChatPage.css';
import ChatContainer from './ChatContainer';
function ChatPage({currentUser,signOut}) {
  console.log("chatpage is opened");
  return (
    <div className="chatpage">
      <div className="chatpage-container">
        <Sidebar currentUser={currentUser} signOut={signOut}/>
        <ChatContainer currentUser={currentUser}/>
      </div>
    </div>
  )
};
export default ChatPage;
