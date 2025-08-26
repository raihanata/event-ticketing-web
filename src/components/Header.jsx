import React from 'react';
import '../App.css';
import '../components/header.css'
import imgUrl from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
     const navigate=useNavigate();
    const loginClick=()=>{
       navigate('/login')
    }

    return (
        <header>
            <div className="container">
               
               <nav id='nav'>
               <div className='logo'><Link to='/'><img src={imgUrl} alt='' /></Link></div>
                <ul>
                    <li className="navitems"><Link to="/cart">Cart</Link></li>
                    <li className="navitems"><a href="">Speakers</a></li>
                    <li className="navitems"><Link to="/ticket">Ticket</Link></li>
                    <li className="navitems"><Link to = "/contact">Contact</Link></li>
                    <li><button onClick={loginClick}>Login </button></li>
                </ul>

            </nav>
            </div>
        </header>
    )
}

export default Header