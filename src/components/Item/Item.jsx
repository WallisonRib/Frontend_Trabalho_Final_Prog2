import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import fetchItem from "../../api/fetchItem";
import "./Item.css"
import Loading from "../Loading/Loading";
import AppContext from '../../context/AppContext';

function Item() {
    const { isbn } = useParams();
    const [itemData, setItemData] = useState(null);
    const { carregando, setLoading } = useContext(AppContext);

    useEffect(() => {
        fetchItem(isbn).then((response) => {
            setLoading(true);
            setItemData(response);
            setLoading(false);
        });
    }, [isbn]);

    while (itemData === null) {
        return <Loading />
    }

    const { nome, preco, title, descricao, autor, foto } = itemData;

    return (
        (carregando ? <Loading /> :
            <div className="wrap">
                <div className="container item">

                <img src={foto}
                alt="product"
                className='Card_image'
            />

                    <div className="item-description">

                        <h2>{nome}</h2>
                        <div className="price">

                            <h2 className="pricecurrency">{preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h2>
                        </div>

                    </div>

                </div>
            </div>
        )
    );
}

export default Item;
