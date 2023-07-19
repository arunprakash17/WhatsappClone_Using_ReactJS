import React from 'react'
import Sidebar from './Sidebar';
import './Home.css';
function Home({currentUser,signOut}) {
  return (
    <div className='home'>
      <div className='home-container'>
        {/*sidebar*/}
        <Sidebar currentUser={currentUser} signOut={signOut}/>
        <div className="home-bg">
          <img src="./whatsapp1.png" alt=""/>
        </div>
      </div>
    </div>
  )
};
export default Home;
