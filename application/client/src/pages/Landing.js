import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1 id="DashboardHeader">
            list <span>creating</span> app
          </h1>
          <p>
            Use this app to create and view lists, to help organize your life,
            get things done, and stop proctastinating. This app can be used
            cross-platform, and each list can be shared with collaborators,
            to either edit the list, or view contents only.
          </p>
          <Link id="LoginRegister" to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing