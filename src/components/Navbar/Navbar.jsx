import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setOpenDropdown(null); // close any open dropdown on menu toggle
  };

  // Toggle dropdown for mobile only
  const toggleDropdown = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  // Detect if mobile (for dropdown click toggle)
  const isMobile = () => window.innerWidth <= 768;

  return (
    <nav className={`container ${sticky ? 'sticky' : ''}`}>
      <a href='http://localhost:5174' className="logo-link">
        <img src={logo} alt="Logo" className='logo' />
      </a>

      {/* Hamburger on right */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="http://localhost:5174">Home</a></li>

        <li
          className={`dropdown ${openDropdown === 'ons' ? 'open' : ''}`}
          onClick={() => isMobile() && toggleDropdown('ons')}
        >
          <span className="dropdown-title">Ons Aanbod</span>
          <ul className="dropdown-content">
            <li><a href="#">Winkel</a></li>
            <li><a href="#">Dagbesteding</a></li>
            <li><a href="#">Ambulante Begeleiding</a></li>
          </ul>
        </li>

        <li
          className={`dropdown ${openDropdown === 'werkwijze' ? 'open' : ''}`}
          onClick={() => isMobile() && toggleDropdown('werkwijze')}
        >
          <span className="dropdown-title">Werkwijze</span>
          <ul className="dropdown-content">
            <li><a href="#">Kernpunten</a></li>
            <li><a href="#">Methodisch werken</a></li>
          </ul>
        </li>

        <li
          className={`dropdown ${openDropdown === 'over' ? 'open' : ''}`}
          onClick={() => isMobile() && toggleDropdown('over')}
        >
          <span className="dropdown-title">Over ons</span>
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
