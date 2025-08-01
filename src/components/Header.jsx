import React from 'react';
import '../App.css';
import '../components/header.css'
import imgUrl from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div className="container">
               
               <nav id='nav'>
               <div className='logo'><Link to='/'><img src={imgUrl} alt='' /></Link></div>
                <ul>
                    <li className="navitems"><a href="">Schedule</a></li>
                    <li className="navitems"><a href="">Speakers</a></li>
                    <li className="navitems"><Link to="/ticket">Ticket</Link></li>
                    <li className="navitems"><a href="">Contact</a></li>
                    <li><button>Login </button></li>
                </ul>

            </nav>
            </div>
        </header>
    )
}

export default Header