import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="profile">
        <img src="/img/profile.jpg" alt="Profile" className="profile-image" /> 
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#setting">About</a></li>
          <li><a href="#service">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
