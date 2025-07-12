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
          <p>“Wij willen (jong)volwassenen en gezinnen (weer) naar eigen vermogen laten participeren in de samenleving.”</p>
          <button className="btn-leesmeer">
            Lees Meer <a href='http://localhost:5174/team'></a> <img src={darkarrow} alt="" />
          </button>
        </div>
      </div>

      {/* UnderHome Section */}
      <UnderHome />
      <WhyLakenvelder />
    </div>
  );
};

export default Home;