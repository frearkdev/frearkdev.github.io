import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`container ${sticky ? 'sticky' : ''}`}>
      <a href='http://localhost:5174'>
      <img src={logo} alt="Logo" className='logo' />
      </a>
      <ul className="menu">
        <li><a href="http://localhost:5174">Home</a></li>

        <li className="dropdown">
          Ons Aanbod
          <ul className="dropdown-content">
            <li><a href="#">Winkel</a></li>
            <li><a href="#">Dagbesteding</a></li>
            <li><a href="#">Ambulante Begeleiding</a></li>
          </ul>
        </li>

        <li className="dropdown">
          Werkwijze
          <ul className="dropdown-content">
            <li><a href="#">Kernpunten</a></li>
            <li><a href="#">Methodisch werken</a></li>
          </ul>
        </li>

        <li className="dropdown">
          Over ons
          <ul className="dropdown-content">
            <li><a href="#">Ons Team</a></li>
            <li><a href="#">Klachten</a></li>
            <li><a href="#">Privacy & persoonsgegevens</a></li>
          </ul>
        </li>

        <li>Missie</li>
        <li><button className='btn'>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
