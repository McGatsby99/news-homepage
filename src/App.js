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
        <div className="grid-item web3-image">
          <img className='web3-mobile' src={web3Mobile} alt="web 3 image"/>
        </div>
      </div>
    </div>
  );
}

export default App;
