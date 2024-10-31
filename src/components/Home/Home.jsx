import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../../imgs/logo.png';
import SearchBar from '../SearchBar/SearchBar';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';
import { fetchGenres } from '../../api/fetchGenres'; // Importe a função fetchGenres
import AppContext from '../../context/AppContext';
import CardHome from '../CardHome/CardHome';
import Loading from '../Loading/Loading';

const Home = () => {
    const navigate = useNavigate(); // Para navegação
    const { products, setProducts, setLoading, carregando } = useContext(AppContext);
    const [genres, setGenres] = useState([]);
    const [searchValue, setSearchValue] = useState(''); // Estado para o valor de busca

    useEffect(() => {
        setLoading(true);
        fetchProducts('Clube').then((response) => {
            setLoading(true);
            setProducts(response);
            setLoading(false);
        });

        // Busca dos gêneros
        fetchGenres().then((genresData) => {
            setGenres(genresData);
        }).catch((error) => {
            console.error('Erro ao buscar gêneros:', error);
        });
    }, []);

    const handleSearch = async (value) => { // Recebe o valor de busca como argumento
        setLoading(true);
        const products = await fetchProducts(value);
        setProducts(products);
        console.log(products);
        setLoading(false);
        navigate(`/search?q=${value}`);
        setSearchValue('');
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [products]);

    return (
        (carregando ? <Loading /> :
            <div className="wrap-home">
                <div className="home-container container">
                    <div className="home-box">
                        <div className="carrosel">
                            <div className="slogan">
                                <p>"Descubra um universo onde a qualidade literária encontra a acessibilidade"</p>
                            </div>
                        </div>
                        <div className="livros_destaque">
                            <div className="wrap-textos">
                                <h1>Livros em destaque</h1>
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
                                {genres.map((genre) => (
                                    <a key={genre.codigo} className="genero" onClick={() => handleSearch(genre.nome)}>
                                        <p>{genre.nome}</p>
                                    </a>
                                ))}
                            </section>
                        </div>
                    </div>
                </div>
            </div>)
    );

}

export default Home;
