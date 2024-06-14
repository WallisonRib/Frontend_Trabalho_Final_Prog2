import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import fetchItem from "../../api/fetchItem";
import "./Item.css";
import Loading from "../Loading/Loading";
import AppContext from '../../context/AppContext';

function Item() {
    const { isbn } = useParams();
    const [itemData, setItemData] = useState(null);
    const { carregando, setLoading } = useContext(AppContext);

    useEffect(() => {
        setLoading(true);
        fetchItem(isbn).then((response) => {
            setItemData(response);
            setLoading(false);
        });
    }, [isbn, setLoading]);

    if (carregando) {
        return <Loading />;
    }

    if (!itemData) {
        return <Loading />;
    }

    const { nome, preco, descricao, autor, editora, foto, linkmenorpreco } = itemData;
    return (
        <div className="wrap container">
            <div className="container item top">

                <div className="imagem">
                    <img src={foto} className="slide-item" alt={nome} />
                </div>

                <div className="item-description">

                    <h2>{nome}</h2>
                    <div className="price">
                        <h2 className="pricecurrency">R$ {preco}</h2>
                    </div>
                    <a href={linkmenorpreco} target="blank">
                        <input className="addcart"
                            type="button"
                            value="COMPRE COM O MENOR PREÇO"
                        />
                    </a>

                </div>

               
            </div>
            <div className="descricao">
                <p>Autor: {autor} </p>
                <p>Editora: {editora} </p>
                <br />

                    {descricao}
                </div>

        </div>
    );
}

export default Item;
