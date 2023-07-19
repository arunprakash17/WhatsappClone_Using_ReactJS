import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import "./UserProfile.css";
import ChatPage from './ChatPage';
function UserProfile({name,photoURL,email,lastMessage}) {

  const navigate=useNavigate();
  const goToUser =(emailId) =>{
    console.log(emailId);
    if(emailId){
      navigate(`/${emailId}`);
      
    }
  };
  return (
    <div className='user-profile' onClick={()=>goToUser(email)}>
        {/* img of user*/}
      <div className='user-image'>
        <img src={photoURL} alt=""/>      
      </div>
      {/* name of the user */}
      <div className="user-info">
        <p className="user-name">{name}</p>
        {lastMessage && <p className="user-lastmessage">{lastMessage}</p>}
      </div>
    </div>
  )
};
export default UserProfile;