import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {

  // this is just for the link of the image and to not past all the link as a parameter 
  // in the HeaderOptions component
  const avatar = "https://vader.news/__export/1607804422330/sites/gadgets/img/2020/12/12/thomas_shelby_portada.jpg_419070470.jpg";

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
          <HeaderOptions avatar={avatar} title="Me" />

      </div>
    </div>
  )
}

export default Header
