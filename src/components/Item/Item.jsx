import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import fetchItem from "../../api/fetchItem";
import "./Item.css";
import Loading from "../Loading/Loading";
import AppContext from '../../context/AppContext';
import StarRatings from 'react-star-ratings';
import PopupReview from '../PopupReviews/PopupReviews'; // Importe o componente de popup
import FetchReviews from '../../api/fetchReviews'; // Importe a função para enviar reviews

function Item() {
    const { isbn } = useParams();
    const [itemData, setItemData] = useState(null);
    const { carregando, setLoading } = useContext(AppContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para controlar o popup

    useEffect(() => {
        setLoading(true);
        fetchItem(isbn).then((response) => {
            setItemData(response);
            setLoading(false);
        });
    }, [isbn, setLoading]);

    const handleReviewSubmit = async (reviewData) => {
        try {
            console.log(reviewData);

            await FetchReviews(isbn, reviewData);
            
            // Atualize o estado para incluir o novo review
            setItemData((prevData) => ({
                ...prevData,
                reviews: [...prevData.reviews, reviewData], // Adiciona o novo review à lista
            }));
        } catch (error) {
            console.error("Erro ao enviar o review:", error);
            // Aqui você pode adicionar lógica para mostrar uma mensagem de erro ao usuário
        }
    };

    if (carregando) {
        return <Loading />;
    }

    if (!itemData) {
        return <Loading />;
    }

    const { nome, preco, descricao, autor, editora, foto, linkmenorpreco, nota_reviews, reviews } = itemData;

    const rating = Number(nota_reviews);

    return (
        <div className="wrap container">
            <div className="container item top">
                <div className="imagem">
                    <img src={foto} className="slide-item" alt={nome} />
                </div>

                <div className="item-description">
                    <h2>{nome}</h2>

                    <div className="wrap-review">
                        <StarRatings
                            rating={rating}
                            starRatedColor="gold"
                            numberOfStars={5}
                            starDimension="30px"
                            starSpacing="15px"
                        />
                    </div>
                    <h5>Uma média de {rating} com {reviews.length} reviews </h5>
                   

                    <button onClick={() => setIsPopupOpen(true)} className="read-reviews-button">
                        Ler todos os reviews
                    </button>

                    <div className="price">
                        <h2 className="pricecurrency">R$ {preco}</h2>
                    </div>
                    <a href={linkmenorpreco} target="blank">
                        <input className="addcart" type="button" value="COMPRE COM O MENOR PREÇO" />
                    </a>
                </div>
            </div>

            <div className="descricao">
                <p>Autor: {autor} </p>
                <p>Editora: {editora} </p>
                <br />
                {descricao}
            </div>

            {isPopupOpen && (
                <PopupReview 
                    reviews={reviews} 
                    onClose={() => setIsPopupOpen(false)} 
                    onSubmitReview={handleReviewSubmit} // Passa a função de envio do review
                />
            )}
        </div>
    );
}

export default Item;
