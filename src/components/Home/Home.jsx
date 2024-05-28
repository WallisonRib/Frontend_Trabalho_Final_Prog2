import React from 'react';
import './Home.css';
import logo from '../../imgs/logo.png'
import SearchBar from '../SearchBar/SearchBar';


const Home = () => {
    return (
        <div className="home-container">
            <div className="login-box">
                <div class="logoHome">
                    <img src={logo} alt="Logo" />
                </div>
                <SearchBar/>
            </div>
            
        </div>
    );
}

export default Home;
