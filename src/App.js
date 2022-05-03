import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      
      {/** header */}
      <Header />

      {/** app body */}
      <div className="app_body">

        {/** sidebar */}
        <SideBar />
        {/** feed */}

        {/** widgets */}
      </div>
    </div>
  );
}

export default App;
