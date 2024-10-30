import './CardHome.css'
import propTypes from 'prop-types'
import { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs'
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings'; // Importe o StarRatings


function CardHome({ data, showLink = true }) {

    const { nome, foto, preco, nota_reviews } = data;

    const rating = Number(nota_reviews); // Ou use parseFloat(nota_reviews)

    return (
        <section className="Card-home">

            <Link className='link' to={`/item/${data.isbn}`}>

                <img src={foto}
                    alt="product"
                    className='Card_image'
                />


                <div className="card_infohome">
                    <h2 className="card_pricehome">R$ {preco.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</h2>


                    <StarRatings
                        rating={rating} // Use o valor convertido
                        starRatedColor="gold" // Cor das estrelas avaliadas
                        numberOfStars={5} // Número total de estrelas
                        starDimension="20px" // Dimensão das estrelas
                        starSpacing="1px" // Espaçamento entre as estrelas
                    />
                    <h2 className="card_titlehome">{nome}</h2>

                </div>
            </Link>

        </section >
    );

}

export default CardHome;

CardHome.propTypes = {
    data: propTypes.shape({}),
}.isRequired;