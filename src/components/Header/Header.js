import React from 'react';
import { Link } from 'react-router-dom';
import food from '../../img/fast-food.png'
import useAuth from '../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid  container">
                    <Link class="navbar-brand" href="#">
                        <img src={food} alt="" style={{ width: "50px", height: "40px", margin: "0 10px" }} className="d-inline-block align-text-middle" />
                        <span className='food-corner'>Food <span className='text-danger'>Corner</span></span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/services'>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/placeorder'>Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/login'>Login</Link>
                            </li>
                            <span className='m-2 fw-bold'>{user.displayName}</span>
                            {user?.email && <button onClick={logout} className='rounded-pill m-2 bg-danger text-light'>Logout</button>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;