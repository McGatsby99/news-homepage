import './App.css';
import logo from './assets/images/logo.svg'
import menu from './assets/images/icon-menu.svg'
import web3Mobile from './assets/images/image-web-3-mobile.jpg'


function App() {
  return (
    <div className="app-container">
      <header className='margin-bottom'>
        <img src={logo} alt="log" width={30}/>
        <img className='menu' src={menu} alt="menu icon" width={30}/>
      </header>
      <div className="content grid-container">
          <img className='web3-mobile grid-item' src={web3Mobile} alt="web 3"/>
          <h1 className='bigger-fontSize grid-item'>The Bright Future of Web 3.0?</h1>
          <div className="read-more grid-item">
            <p className='margin-bottom'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?</p>
            <a href='#'>READ MORE</a>
          </div>
          <div className="new-container grid-item">
            <div className="content-box">
              <h1>New</h1>
              <section>
                <h3>Hydogen VS Electric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </section>
              <hr/>
              <section>
                <h3>The Downsides of AI Artistry</h3>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
              </section>
              <hr/>
              <section>
                <h3>Is VC Funding Drying Up?</h3>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </section>
              <hr/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
