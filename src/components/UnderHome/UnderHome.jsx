import React from 'react'
import './UnderHome.css'
import client from '../../assets/home_client.jpg'

const UnderHome = () => {
  return (
    <div className='underhome'>
        <div className='underhome-1'>
            <img src={client} alt="" />
            <div className='underhome-text'>
                <h3>Op zoek naar ambulante hulpverlening of een dagbestedingsplek waar jij je thuis voelt?</h3>
                <p>De Lakenvelder Zorg is een organisatie die ambulante begeleiding en dagbesteding biedt aan mensen met een psychische, sociale of licht verstandelijke beperking.</p>
                <p>De Lakenvelderzorg  is er voor iedereen die de grip op zijn of haar leven is verloren of dit dreigt kwijt te raken. Wij helpen  graag om de zelfredzaamheid te vergroten en naar eigen vermogen te participeren in de samenleving.</p>
                 </div>
                 <div class="icon-container">
    <div class="icon-row">
      <div class="icon-box">
        <i class="fas fa-praying-hands"></i>
        <span>Betrokken</span>
      </div>
      <div class="icon-box">
        <i class="far fa-lightbulb"></i>
        <span>Innovatief</span>
      </div>
      <div class="icon-box">
        <i class="fas fa-users"></i>
        <span>Laagdrempelig</span>
      </div>
      <div class="icon-box">
        <i class="fas fa-balance-scale"></i>
        <span>Zonder waardeoordeel</span>
      </div>
      <div class="icon-box">
        <i class="fas fa-people-carry"></i>
        <span>Samenwerken</span>
      </div>
      <div class="icon-box">
        <i class="fas fa-handshake"></i>
        <span>Respect</span>
      </div>
    </div>
  </div>
      </div>
    </div>
  )
}

export default UnderHome
