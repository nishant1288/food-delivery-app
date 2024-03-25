import "./header.css";
import logo from '../../../assets/logo/logo.png';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus/useOnlineStatus";

const Header = () => {
    let btnName = 'Login';
    const [btn, setBtn] = useState('Login')
    const status = useOnlineStatus();
    // console.log('Header Rendered first')

    useEffect(() => {
        // console.log('Use effect in header')
    }, [btn])

    // console.log('Header Rendered second')
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='nav-items'>
                <ul className='nav-list'>
                    <li>Online Status : {status ?  'Online' : 'Offline' }</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/aboutclass">About Class</Link> </li>
                    <li><Link to="/userclassapi">User Class API</Link> </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/groceries" >Groceries</Link></li>
                    <li><button className="login-btn" onClick={() => { 
                        btn === 'Login' ? setBtn('Logout') : setBtn('Login')
                        }}>{btn}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;