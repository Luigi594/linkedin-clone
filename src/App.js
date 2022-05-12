import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import { selectUser } from "./features/userSlice";
import { useSelector } from 'react-redux';
import { auth } from './firebaseConfig';
import Login from './Login';

function App() {

  // here we're pulling the user using redux
  const user = useSelector(selectUser);

  useEffect(() => {

    auth.onAuthStateChanged(userAuth => {

      if(userAuth){

        // the user is logged in
      }
      else{

        // the user is logged out
      }
    })
  }, [])

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
        </div>
      )}
    </div>
  );
}

export default App;
