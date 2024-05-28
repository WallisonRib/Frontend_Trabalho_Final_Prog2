import SearchBar from '../SearchBar/SearchBar';
import logo from '../../imgs/logo.png'

import './Header.css';
import { Link } from 'react-router-dom';
function Header() {

    return (
        <header className="header">
            <div className="container">
                <Link to="/" >
                    <div class="logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                </Link>

                <SearchBar />
            </div>
        </header>
    );
}
export default Header;