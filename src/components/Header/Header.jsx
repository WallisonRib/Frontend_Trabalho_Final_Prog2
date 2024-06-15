import SearchBar from '../SearchBar/SearchBar';
import logo from '../../imgs/logo.png'

import './Header.css';
import { Link } from 'react-router-dom';
import { LuLogIn } from "react-icons/lu";



function Header() {

    return (
        <header className="header">
            <div class="container">
                <Link to="/" >
                    <div class="logo">
                        <img src={logo} className='logo-img' alt="Logo" />
                    </div>
                </Link>

                <SearchBar />

                <Link to={`/login`}>
                    <LuLogIn className='logo-login' color='white' size={30} />
                </Link>

            </div>
        </header>
    );
}
export default Header;