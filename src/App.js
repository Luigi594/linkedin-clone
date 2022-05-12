import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './firebaseConfig';
import Login from './Login';
import Widgets from './Widgets';

function App() {

  // here we're pulling the user using redux
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {

    auth.onAuthStateChanged(userAuth => {

      if(userAuth){

        // the user is logged in
        dispatch(login({

          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL

        }));

      }
      else{

        // the user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <div className="App">
      
      {/** header */}
      <Header />

      {/** if there's no user, render the Login component
       * if it is, render the rest of the app
       */}
      {!user ? <Login /> : (

        /** app body */
        <div className="app_body">

          {/** sidebar */}
          <SideBar />

          {/** feed */}
          <Feed />

          {/** widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
