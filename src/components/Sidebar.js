import { InsertComment, MoreVertOutlined, Search, Toll } from '@mui/icons-material';
import React, { useEffect ,useState} from 'react';
import "./Sidebar.css";
import UserProfile from './UserProfile';
import db from '../firebase';

function Sidebar({currentUser,signOut}) {

  const [allUsers,setAllUsers]=useState([]);
  const [searchInput,setSearchInput]=useState("");
  const [friendList, setFriendList] = useState([]);

  useEffect(()=>{
    const getAllUsers = async ()=>{
      const data = await db.collection('users').onSnapshot((snapshot)=> {
        setAllUsers
            (snapshot.docs.filter((doc)=>doc.data().email !== 
            currentUser?.email)
            );
      });
    };
      const getFriends = async () => {
      const data = await db
        .collection("Friendlist")
        .doc(currentUser.email)
        .collection("list")
        .onSnapshot((snapshot) => {
          const list = friendList;
          console.log(snapshot);
          //setFriendList([... list,snapshot.docs]);
          setFriendList(snapshot.docs);
        });
        console.log(friendList);
    };

    getAllUsers();
    getFriends();

  },[])
   
  const searchedUser = allUsers.filter((user)=>{
    if(searchInput){
      if (user.data().fullname.toLowerCase().includes(searchInput.toLowerCase())){
        return user
      }
    }
  })

  const searchItem = searchedUser.map((user)=>{
    return (
      <UserProfile 
      name ={user.data().fullname}
      photoURL={user.data().photoURL}
      key={user.id}
      email={user.data().email}
      />
    )
  })
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <div className='sidebar-header-img' onClick={signOut}>
            <img src={currentUser.photoURL} alt="AP"/>
        </div>
        <div className='sidebar-header-btn'>
            <Toll/>
            <InsertComment/>
            <MoreVertOutlined/>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-input">
          <Search/>
          <input type="text" name="search" placeholder='search...'
           value={searchInput}
           onChange={(e)=> setSearchInput(e.target.value)}
           />
        </div>
      </div>
      <div className="sidebar-chat-list">
        {
          searchItem.length>0 ? searchItem :(
           friendList.map((friend) => (
              <UserProfile
                name={friend.data().fullname}
                photoURL={friend.data().photoURL}
                lastMessage={friend.data().lastMessage}
                email={friend.data().email}
              />))
            )
        } 
          
      </div>
    </div>
  )
}

export default Sidebar;
