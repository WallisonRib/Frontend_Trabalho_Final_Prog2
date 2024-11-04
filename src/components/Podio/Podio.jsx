import React from 'react';
import './Podio.css'; // Arquivo de estilos

const Podio = ({ positions }) => {
  return (
    <div className="podio-container">
      {positions.map((position, index) => (
        <div key={index} className={`posicao posicao-${index + 1}`}>
          <div className="nome">{position.name}</div>
          <div className="lugar">{index + 1}º</div>
        </div>
      ))}
    </div>
  );
};

export default Podio;
