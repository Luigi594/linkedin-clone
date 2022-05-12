import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from "./firebaseConfig";
import { logout } from './features/userSlice';

function Header() {

  const dispatch = useDispatch();

  const logoutApp = () => {

    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
      <div className="header_left">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

          <div className="header_search">
              {/** material icon Search */}
              <SearchIcon />
              <input placeholder='Search something...' type="text" />
          </div>
      </div>

      <div className="header_right">
          <HeaderOptions Icon={HomeIcon} title="Home" />
          <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOptions Icon={ChatIcon} title="Messaging" />
          <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
          <HeaderOptions avatar={true} title="Me" onClick={logoutApp} />
      </div>
    </div>
  )
}

export default Header
