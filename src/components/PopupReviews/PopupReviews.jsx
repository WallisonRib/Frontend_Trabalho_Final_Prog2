import React, { useState } from 'react';
import './PopupReviews.css';
import StarRatings from 'react-star-ratings';

const PopupReviews = ({ reviews, onClose, onSubmitReview }) => {
    const [autor, setAutor] = useState('');
    const [nota, setNota] = useState(5);
    const [texto, setTexto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewData = { 
            AutorReview: autor, 
            NotaReview: nota, 
            TextoReview: texto, 
            review_date: new Date().toISOString() // Obtém a data atual no formato ISO
        };
        onSubmitReview(reviewData); // Chama a função passada via props
    
        // Limpa os campos após o envio
        setAutor('');
        setNota(5);
        setTexto('');
    };
    

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button onClick={onClose} className="close-button">Fechar</button>
                <h2>Todas as Reviews</h2>
                {reviews.length > 0 ? (
                    <ul>
                        {reviews.map(review => (
                            <li className="li-reviews" key={review.review_id}>
                                <ul>
                                    <strong>{review.AutorReview}</strong>
                                </ul>
                                <ul>
                                    <StarRatings
                                        rating={review.NotaReview}
                                        starRatedColor="gold"
                                        numberOfStars={5}
                                        starDimension="20px"
                                        starSpacing="1px"
                                    />
                                </ul>
                                <ul>{review.TextoReview}</ul>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nenhum review disponível.</p>
                )}
                <h3>Enviar um Review</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Seu Nome:
                            <input
                                type="text"
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Nota:
                            <input
                                type="number"
                                value={nota}
                                min="1"
                                max="5"
                                onChange={(e) => setNota(Number(e.target.value))}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Review:
                            <textarea
                                value={texto}
                                onChange={(e) => setTexto(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Enviar Review</button>
                </form>
            </div>
        </div>
    );
};

export default PopupReviews;
