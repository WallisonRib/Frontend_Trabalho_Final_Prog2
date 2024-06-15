import { BsSearch } from 'react-icons/bs'
import { useState, useContext, useEffect } from 'react';
import './Search.css'
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

function Search() {
    const { carregando, products} = useContext(AppContext);

    useEffect(() => {
        // Esta função será chamada sempre que products ou genres mudarem
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [products]);

    return (
        (carregando ? <Loading /> :
            <section className="products container">
                {
                    products.map((product) => <Card key={product.isbn} data={product}/>)
                }
            </section>
        )
    );
}

export default Search;