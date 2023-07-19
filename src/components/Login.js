import React from 'react';
import './Login.css';
import {auth} from "../firebase";
import db,{ googleProvider } from '../firebase';
import {useNavigate} from "react-router-dom";

function Login({setUser}) {
    const navigate=useNavigate();
    const signInWithGoogle =()=>{
        auth
        .signInWithPopup(googleProvider)
        .then((result) =>{
            const newUser ={
                fullname :result.user.displayName,
                email:result.user.email,
                photoURL:result.user.photoURL,
            };
            navigate("/");
            console.log(newUser);
            setUser(newUser);
            //localStorage.setItem('user',JSON.stringify(newUser));
            db.collection("users").doc(result.user.email).set(newUser);
        })
        .catch((err)=> alert(err.message));

    };
  return (
    <div className="login">
      <div className="login-container">
        <img src="./whatsapp1.png" className='login-logo' alt=""/>
        <p className='login-name'> Whatsapp web</p>
        <button className="login-btn" onClick={signInWithGoogle}>
            <img src="./g2.png" alt="login with google"/> 
            Login with Google
        </button>
      </div>
    </div>
  )
}
export default Login;
