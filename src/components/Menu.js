import closeMenu from '../assets/images/icon-menu-close.svg'

const Menu = ({ showMenu, setShowMenu} ) => {
  return (
    <div className={`menu ${showMenu? 'displayMenu': ''}`}>
        <img 
        className='bigger-margin' 
        src={closeMenu} 
        alt="close menu"
        onClick={() => setShowMenu(!showMenu)}
        width={30}
        />
        <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
        </ul>
    </div>
  )
}

export default Menu