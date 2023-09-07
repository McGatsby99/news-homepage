import retroPC from '../assets/images/image-retro-pcs.jpg'
import laptop from '../assets/images/image-top-laptops.jpg'
import gaming from '../assets/images/image-gaming-growth.jpg'

const HardwareReview = () => {
  return (
    <div className="computers grid-item">
              <article>
                <img src={retroPC} alt="retro PCs" width={120}/>
                <div className="info">
                  <h2>01</h2>
                  <h3>Reviving Retro PCs</h3>
                  <p>What happens when old PCs are given modern upgrades?</p>
                </div>
              </article>
              <article>
                <img src={laptop} alt="laptop" width={120}/>
                <div className="info">
                  <h2>02</h2>
                  <h3>Top 10 Laptops of 2022</h3>
                  <p>Our best picks for various needs and budgets.</p>
                </div>
              </article>
              <article>
                <img src={gaming} alt="gaming console" width={120}/>
                <div className="info">
                  <h2>03</h2>
                  <h3>The Growth of Gaming</h3>
                  <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
              </article>
            </div>
  )
}

export default HardwareReview