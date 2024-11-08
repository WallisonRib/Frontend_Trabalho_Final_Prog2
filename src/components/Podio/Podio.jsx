import React from 'react';
import './Podio.css';
import CardHome from '../CardHome/CardHome';

const Podio = ({ positions = [] }) => {
  console.log(positions[0]);
  return (
    <div className="podio-container">
      {positions.map((book, index) => (


        <div key={book.isbn || index} className={`posicao posicao-${index + 1}`}>
          <div>
            <img className="foto-podio" src={positions[index].foto} alt="" />



          </div>

          <div className="lugar">{index + 1}º Lugar</div>
        </div>

      ))}
    </div>
  );
};

export default Podio;
