import React from 'react';
import { Container } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/images/res-logo.png';

import './Header.css';

const nav__links = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Foods',
        path: '/foods'
    },
    {
        display: 'Cart',
        path: '/cart'
    },
    {
        display: 'Contact',
        path: '/contact'
    }
];

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="nav__wrapper d-flex 
                    align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <h5>Tasty Treat</h5>
                    </div>
                    <div className="navigation">
                        <div className="menu d-flex align-items-center gap-5">
                            {
                                nav__links.map((item, i) => (
                                    <NavLink key={i} to={item.path}
                                        className={(navClass) => navClass.isActive ? 'active__menu' : ''}
                                        >
                                        {item.display}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                    <div className="nav__right d-flex align-items-center gap-4">
                        <span className="cart__icon">
                            <i className="ri-shopping-basket-line"></i>
                            <span className="badge">0</span>
                        </span>
                        <div className="user">
                            <Link to="/login">
                                <i className="ri-user-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;