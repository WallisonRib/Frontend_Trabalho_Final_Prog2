import React from 'react';
import './Home.css';
import logo from '../../imgs/logo.png'
import fraseHome from '../../imgs/logo.png'

import SearchBar from '../SearchBar/SearchBar';


const Home = () => {
    return (
        <div className="home-container">
            <div className="login-box">
                
                <div class="logoHome">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="slogan">
                    <p>"Descubra um universo onde a qualidade literária encontra a acessibilidade"</p>
                </div>

                <SearchBar />
            </div>

        </div>
    );
}

export default Home;
