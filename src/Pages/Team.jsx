import React from 'react';
import '../components/Home/Home.css';
import '../components/UnderHome/UnderHome.css';
import darkarrow from '../assets/dark-arrow.png';
import UnderHome from '../components/UnderHome/UnderHome';
import WhyLakenvelder from '../components/WhyLakenvelder/WhyLakenvelder.jsx';

const Home = () => {
  return (
    <div className="homepage-wrapper">
      {/* Home Section */}
      <div className="home">
        <div className="home-text">
          <h1>Welkom bij Lakenvelder Zorg</h1>
          <button className="btn-leesmeer">
            Lees Meer <img src={darkarrow} alt="" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;