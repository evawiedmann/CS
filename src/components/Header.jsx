import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Athena's Tap Room</h1>
      <h2>Keg Directory</h2>
      <div className='nav'><Link to="/">Home</Link> | <Link to="/NewKegForm">Create Keg Profile</Link>
      </div>
    </div>
  );
}

export default Header;
