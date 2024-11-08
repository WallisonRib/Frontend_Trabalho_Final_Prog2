import React from 'react';
import './Podio.css';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const Podio = ({ positions = [] }) => {
  return (
    <div className="podio-container">
      {positions.map((book, index) => (
        <Link to={`/item/${book.isbn}`} key={book.isbn || index} className={`posicao posicao-${index + 1}`}>
          <div>
            <img className="foto-podio" src={positions[index].foto} alt={`${book.title} cover`} />
          </div>

          <div className="lugar">{index + 1}º Lugar</div>
          <br /><br />
      
          <StarRatings
            rating={positions[index].nota_reviews}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
          />
          <p className='nota-livro'>{positions[index].nota_reviews.toFixed(2)}</p>
        </Link>
      ))}
    </div>
  );
};

export default Podio;
