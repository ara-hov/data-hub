import HeaderLogo from './header-logo/HeaderLogo'
import Navbar from './navbar/Navbar'
import UserAction from './SearchBar&SIgnUp/UserAction'
import './header.scss'

const Header = () => {
    return (
        <div className='header__container'>
            <HeaderLogo />
            <Navbar />
            <UserAction />
        </div>
    )
}

export default Header
