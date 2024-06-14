import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../../imgs/logo.png';
import fraseHome from '../../imgs/logo.png';
import SearchBar from '../SearchBar/SearchBar';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';
import CardHome from '../CardHome/CardHome';
import Loading from '../Loading/Loading';

const Home = () => {
    const { products, setProducts, carregando, setLoading } = useContext(AppContext);

    useEffect(() => {
        fetchProducts('Java').then((response) => {
            setProducts(response);
            setLoading(false);
        });
    }, []);

    return (
        <div className="wrap">
            <div className="home-container container ">
                <div className="home-box">
                    <div className="carrosel">
                        <div className="slogan">
                            <p>"Descubra um universo onde a qualidade literária encontra a acessibilidade"</p>
                        </div>
                    </div>
                    <div className="livros_destaque">
                        <div className="wrap-textos">
                            <h1>Livros em destaque</h1>
                            <p>ver todos</p>
                        </div>
                        <section className="produtos container">
                            {
                                products.slice(0, 2).map((product) => (
                                    <CardHome key={product.isbn} data={product} />
                                ))
                            }
                        </section>

                        <div className="titulo_genero">
                            <h1>Filtrar por gêneros</h1>
                        </div>

                        <section className='FiltrarGeneros'>
                            <a className="genero" href="">
                                <p>Programacao</p>
                            </a>
                            <a className="genero" href="">
                                <p>Programacao</p>
                            </a>
                            <a className="genero" href="">
                                <p>Programacao</p>
                            </a>
                            <a className="genero" href="">
                                <p>Programacao</p>
                            </a>
                            <a className="genero" href="">
                                <p>Programacao</p>
                            </a>
                            <a className="genero" href="">
                                <p>Programacao</p>
                            </a>
                        
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
