import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'
import { useState } from 'react'
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { toggleSidebar, logoutUser, user } = useAppContext()
  return (
    <Wrapper>
      <div className='nav-center'>
        <button id="hamburgerMenu" type='button' className='toggle-btn' onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </button>
        <div>
          <Logo />
          <h3 id="WelcomeUser" className='logo-text'>welcome, {user.name}!</h3>
        </div>
        <div className='btn-container'>
          <button
            id="ProfileButton"
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button id="LogoutButton" type='button' className='dropdown-btn' onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
