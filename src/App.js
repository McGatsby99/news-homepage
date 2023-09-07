import './App.css';

//nav
import logo from './assets/images/logo.svg'
import menu from './assets/images/icon-menu.svg'

//web 3 image
import web3Mobile from './assets/images/image-web-3-mobile.jpg'

//components
import NewTech from './components/NewTech';
import HardwareReview from './components/HardwareReview';
import ReadMore from './components/ReadMore';
import Menu from './components/Menu';

import React, { useState } from 'react'





function App() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="app-container">
      <nav>
        <header>
          <img src={logo} alt="log" width={30}/>
          <img 
            className={`menuIcon ${showMenu? 'pressed': ''}`} 
            src={menu} 
            alt="menu icon" 
            onClick={() => setShowMenu(!showMenu)}
            width={30}/>
        </header>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

      </nav>

      <div className="content grid-container">
          <img className='web3-mobile grid-item' src={web3Mobile} alt="web 3"/>

          <h1 className='bigger-fontSize grid-item'>The Bright Future of Web 3.0?</h1>
          <ReadMore />
          <NewTech />
          <HardwareReview />
          
        </div>
    </div>
  );
}

export default App;
