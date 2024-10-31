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
            review_date: new Date().toISOString()
        };
        onSubmitReview(reviewData);
        setAutor('');
        setNota(5);
        setTexto('');
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button onClick={onClose} className="close-button">Fechar</button>
                <div className="wrap-reviews">
                    <div className="resumo-e-formulario">
                        <h3 className="form-title">Enviar um Review</h3>
                        <form className="review-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">
                                    Seu Nome:
                                    <input
                                        type="text"
                                        value={autor}
                                        onChange={(e) => setAutor(e.target.value)}
                                        required
                                        className="form-input"
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Nota:
                                </label>
                                <StarRatings
                                    rating={nota}
                                    starRatedColor="blue"
                                    changeRating={(newRating) => setNota(newRating)}
                                    numberOfStars={5}
                                    starDimension="30px"
                                    starSpacing="5px"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Review:
                                    <textarea
                                        value={texto}
                                        onChange={(e) => setTexto(e.target.value)}
                                        required
                                        className="form-textarea"
                                    ></textarea>
                                </label>
                            </div>
                            <button type="submit" className="form-button">Enviar Review</button>
                        </form>
                    </div>
                    <div className="avaliacoes">
                        <h2>Todas as Reviews</h2>
                        {reviews.length > 0 ? (
                            <ul>
                                {reviews.slice().reverse().map(review => (
                                    <li className="li-reviews" key={review.review_id}>
                                        <ul><strong>{review.AutorReview}</strong></ul>
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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupReviews;
