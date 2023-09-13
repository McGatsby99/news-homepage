import './App.css';

//nav
import logo from './assets/images/logo.svg'
import menu from './assets/images/icon-menu.svg'

//web 3 image
import web3Mobile from './assets/images/image-web-3-mobile.jpg'
import web3Desktop from './assets/images/image-web-3-desktop.jpg' 

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
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        </header>
        

      </nav>

      <div className="content grid-container">
          <picture className='web3-picture grid-item'>
            <source className='web3-img' srcset={web3Desktop} media='(min-width:760px)'/>
            <img className='web3-img' src={web3Mobile} alt="web 3"/>
            
          </picture>

          <h1 className='headline grid-item'>The Bright Future of Web 3.0?</h1>
          <ReadMore />
          <NewTech />
          <HardwareReview />
          
        </div>
    </div>
  );
}

export default App;
