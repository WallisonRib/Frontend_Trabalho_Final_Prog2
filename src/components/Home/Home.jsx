import React from 'react';
import './Home.css';
import logo from '../../imgs/logo.png'
import fraseHome from '../../imgs/logo.png'
import { Link } from 'react-router-dom';


import SearchBar from '../SearchBar/SearchBar';


const Home = () => {
    return (
        <div className="home-container">
            <div className="home-box">

                <div class="logoHome">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="slogan">
                    <p>"Descubra um universo onde a qualidade literária encontra a acessibilidade"</p>
                </div>

                <SearchBar />
            </div>

            <Link to={`/login`}>

                <button class="btn_login">
                    <p>Fazer login</p>
                </button>

            </Link>

        </div>
    );
}

export default Home;
