import React, { useState } from 'react';
import "./Login.css";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {

    // my hooks
    const [name, setName] = useState('');
    const [profile, setProfile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    // login functionality
    const loginToApp = (e) => {
        
        e.preventDeafult();
    }

    // register functionality
    const register = () => {

        if(!name){
            return alert("Please enter a full name");
        }

        // this is how we create an user in firebase V9
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            updateProfile(userCredential.user, {
                displayName: name,
                photoURL: profile
            })
            .then(() => {

                // then we call the dispatch for redux
                // is like, we send the information to redux, so we can use it after
                // with just calling it, and not passing the information as a multipler parameter
                // in all our components
                dispatch(login({
                    
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    displayName: name,
                    photoURL: profile
                }))
            })
            console.log(userCredential.user)
        })
        .catch((error) => {
            console.log(error);
        })
        
    }

  return (
    <div className='login'>
      <img src="https://www.aac.cw/wp-content/uploads/2018/12/580b57fcd9996e24bc43c528.png" alt="" />

      <form action="">

          {/** name input */}
          <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" placeholder="Full name (require if you're registering)" />

          {/** profile input */}
          <input 
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          type="text" placeholder="Profile pic URL (optional)" />


          {/** email input */}
          <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text" placeholder="Email" />

          {/** password input */}
          <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" placeholder="Password" />

          <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>

      <p>
          Not a member? {" "}
          <span className='login_register' onClick={register}>Register now</span>
      </p>
    </div>
  )
}

export default Login
