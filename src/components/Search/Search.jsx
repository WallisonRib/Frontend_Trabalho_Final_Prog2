import { useState, useContext, useEffect } from 'react';
import './Search.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

function Search() {
    const { carregando, products } = useContext(AppContext);
    const [exibindoNenhumItem, setExibindoNenhumItem] = useState(false);

    useEffect(() => {
        // Esta função será chamada sempre que products ou genres mudarem
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Verifica se há produtos para exibir ou mostrar o texto de nenhum item encontrado
        setExibindoNenhumItem(products.length === 0);
    }, [products]);

    return (
        <>
            {carregando ? (
                <Loading />
            ) : (
                <section className="products container">
                    {exibindoNenhumItem ? (
                        <h1 className='container'>Nenhum item encontrado</h1>
                    ) : (
                        products.map((product) => <Card key={product.isbn} data={product} />)
                    )}
                </section>
            )}
        </>
    );
}

export default Search;
