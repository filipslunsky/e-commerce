import { Link } from 'react-router-dom';
import Logo from "./Logo";
import cartIcon from '../assets/img/icon-cart.svg';
import avatarImage from '../assets/img/image-avatar.png';
import './navbar.css';


const Navbar = () => {
    return (
    <>
        <div className='navContainer'>
            <div className='leftContainer'>
                <Logo />
                <div className='navItemsContainer'>
                    <Link className='navItem' to={'/collections'}>Collections</Link>
                    <Link className='navItem' to={'/men'}>Men</Link>
                    <Link className='navItem' to={'/women'}>Women</Link>
                    <Link className='navItem' to={'/about'}>About</Link>
                    <Link className='navItem' to={'/contact'}>Contact</Link>
                </div>
            </div>
            <div className='rightContainer'>
                <Link to={'/cart'}><img className='cartIcon' src={cartIcon} alt='cart' /></Link>
                <Link to={'/user'}><img className='userImg' src={avatarImage} alt='user image' /></Link>
            </div>
        </div>
    </>
    );
}
 
export default Navbar;