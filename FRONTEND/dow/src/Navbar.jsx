import { useState } from 'react';
import logo from './logo.jpeg'
const Navbar = () => {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  const navbarStyle = {
    backgroundColor: lightMode ? '#ffffff':'#222222',
    color: lightMode ?'#000000':'#ffffff' ,
  };

  return (
    <nav style={navbarStyle}>
      <div id="logo">
        {/* Logo */}
        <a href="/"><img src={logo} alt=""  />Drops Of Wit </a>
      </div>
      <div>
        {/* Navigation links */}
        <ul>
          <li>
            <a href="/">Podcasts</a>
          </li>
          <li>
            <a href="/episodes">Studio</a>
          </li>
          <li>
            <a href="/about">Chatroom</a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
      <div>
        {/* Dark mode toggle */}
        <label htmlFor="lightModeToggle">
          <input
            type="checkbox"
            id="lightModeToggle"
            checked={lightMode}
            onChange={toggleLightMode}
          />
          Light Mode
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
