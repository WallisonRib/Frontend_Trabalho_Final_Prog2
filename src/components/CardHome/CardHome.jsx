import './CardHome.css'
import propTypes from 'prop-types'
import { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs'
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';


function CardHome({ data, showLink = true }) {

    const { nome, foto, preco, autor } = data;
    return (
        <section className="Card">

        <Link className='link' to={`/item/${data.isbn}`}>  
        
            <img src={foto}
                alt="product"
                className='Card_image'
            />

            <div className="card_infohome">
                <h2 className="card_pricehome">R$ {preco.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}</h2>                <h2 className="card_titlehome">{nome}</h2>

            </div>
            </Link>

        </section >  
    );

}

export default CardHome;

CardHome.propTypes = {
    data: propTypes.shape({}),
}.isRequired;