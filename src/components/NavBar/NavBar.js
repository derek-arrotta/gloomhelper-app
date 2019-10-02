import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <header role="banner">
                <nav role="navigation">
                    <ul className="navlist">
                        <li><NavLink exact to='/'>Gloomhelper Logo</NavLink></li>
                        <li>Dashboard</li>
                        <li><NavLink to='/newparty'>+ Party</NavLink></li>
                        <li><NavLink to='/newchar'>+ Char</NavLink></li>
                        <li><NavLink to='#' onClick={() => this.props.handleOpenModal('login')}>Login</NavLink></li>
                        <li><NavLink to='#' onClick={() => this.props.handleOpenModal('createacct')}>Create Account</NavLink></li>
                        <li>Logout</li>
                    </ul>
                </nav>
          </header>
      
        )
    }
}

export default NavBar;