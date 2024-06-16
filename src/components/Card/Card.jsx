import './Card.css'
import propTypes from 'prop-types'
import { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs'
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';


function Card({ data, showLink = true }) {

    const { nome, foto, preco, autor } = data;
    return (
        <section className="Card_search">

        <Link className='link_search' to={`/item/${data.isbn}`}>  
        
        <div className="wrap_image_search">
        <img src={foto}
                alt="product"
                className='Card_image_search'
            />

        </div>
            
            <div className="card_info">
                <h2 className="card_price">R$ {preco.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}</h2>                <h2 className="card_title">{nome}</h2>

            </div>
            </Link>

        </section >  
    );

}

export default Card;

Card.propTypes = {
    data: propTypes.shape({}),
}.isRequired;