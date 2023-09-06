import './App.css';
import logo from './assets/images/logo.svg'
import menu from './assets/images/icon-menu.svg'
import web3Mobile from './assets/images/image-web-3-mobile.jpg'


function App() {
  return (
    <div className="app-container">
      <header>
        <img src={logo} alt="log" width={30}/>
        <img className='menu' src={menu} alt="menu icon" width={30}/>
      </header>
      <div className="content grid-container">
          <img className='web3-mobile grid-item' src={web3Mobile} alt="web 3 image"/>
          <h1 className='bigger-fontSize grid-item'>The Bright Future of Web 3.0?</h1>
          <div className="read-more grid-item">
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?</p>
            <a>READ MORE</a>
          </div>
      </div>
    </div>
  );
}

export default App;
