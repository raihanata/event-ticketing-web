import React from 'react';
import '../App.css';
import '../components/header.css'
import imgUrl from '../assets/images/logo.png'

const Header = () => {

    return (
        <header>
            <div className="container">
               
               <nav id='nav'>
               <div className='logo'><img src={imgUrl} alt='' /></div>
                <ul>
                    
                    
                    <li class="navitems"><a href="">Schedule</a></li>
                    <li class="navitems"><a href="">Speakers</a></li>
                    <li class="navitems"><a href="">Ticket</a></li>
                    <li class="navitems"><a href="">Contact</a></li>
                    <li><button>Login </button></li>
                </ul>

            </nav>
            </div>
        </header>
    )
}

export default Header