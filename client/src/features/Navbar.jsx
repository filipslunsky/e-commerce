import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from "./Logo";
import SmallCart from './cart/SmallCart';
import cartIcon from '../assets/img/icon-cart.svg';
import avatarImage from '../assets/img/image-avatar.png';
import mobileMenuIcon from '../assets/img/icon-menu.svg';
import './navbar.css';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cart = useSelector((state) => state.cart.cart);
    const totalAmount = cart.reduce((acc, item) => acc + item.amount, 0);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
    <>
        <div className='navContainer'>
            <div className='leftContainer'>
            <img className='menuIcon' src={mobileMenuIcon} alt="menu icon" onClick={toggleMobileMenu} />
                <Logo />
                <div className={`navItemsContainer ${isMobileMenuOpen ? 'mobileMenu' : ''}`}>
                    <Link onClick={closeMobileMenu} className='navItem' to={'/collections'}>Collections</Link>
                    <Link onClick={closeMobileMenu} className='navItem' to={'/men'}>Men</Link>
                    <Link onClick={closeMobileMenu} className='navItem' to={'/women'}>Women</Link>
                    <Link onClick={closeMobileMenu} className='navItem' to={'/about'}>About</Link>
                    <Link onClick={closeMobileMenu} className='navItem' to={'/contact'}>Contact</Link>
                </div>
            </div>
            <div className='rightContainer'>
                {
                    totalAmount !==0
                    ?
                    <Link className='cartBadge' to={'/cart'}>{totalAmount}</Link>
                    :
                    ''
                }
                <div className='smallCartNavContainer'>
                    <Link to={'/cart'}>
                        <img className='cartIcon' src={cartIcon} alt='cart' />
                    </Link>
                    <div className="smallCartComponent">
                        <SmallCart />
                    </div>
                    <Link to={'/user'}><img className='userImg' src={avatarImage} alt='user image' /></Link>
                </div>
                
            </div>
        </div>
    </>
    );
}
 
export default Navbar;