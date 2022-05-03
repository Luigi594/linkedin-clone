import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function Header() {
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

      </div>
    </div>
  )
}

export default Header
