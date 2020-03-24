import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Epicodus Mentorship Matcher</h1>
      <div className='nav'><Link to="/">Home</Link> | <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
