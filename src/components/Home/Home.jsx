import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../../imgs/logo.png';
import SearchBar from '../SearchBar/SearchBar';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';
import fetchTop3 from '../../api/fetchTop3';
import { fetchGenres } from '../../api/fetchGenres';
import AppContext from '../../context/AppContext';
import CardHome from '../CardHome/CardHome';
import Loading from '../Loading/Loading';
import Podio from '../Podio/Podio';

const Home = () => {
    const navigate = useNavigate();
    const { products, setProducts, setLoading, carregando } = useContext(AppContext);
    const [genres, setGenres] = useState([]);
    const [top3, setTop3] = useState([]);
    const [searchValue, setSearchValue] = useState(''); 

    useEffect(() => {
        // Carrega os produtos e define o estado de carregamento
        const loadProducts = async () => {
            setLoading(true);
            try {
                const response = await fetchProducts('Clube');
                setProducts(response);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            } finally {
                setLoading(false);
            }
        };

        // Carrega os top 3 livros para o ranking
        const loadTop3 = async () => {
            setLoading(true);
            try {
                const response = await fetchTop3();
                setTop3(response);
            } catch (error) {
                console.error('Erro ao buscar top 3:', error);
            } finally {
                setLoading(false);
            }
        };

        // Carrega os gêneros
        const loadGenres = async () => {
            try {
                const genresData = await fetchGenres();
                setGenres(genresData);
            } catch (error) {
                console.error('Erro ao buscar gêneros:', error);
            }
        };

        loadProducts();
        loadTop3();
        loadGenres();
    }, [setLoading, setProducts]);

    const handleSearch = async (value) => {
        setLoading(true);
        try {
            const response = await fetchProducts(value);
            setProducts(response);
            navigate(`/search?q=${value}`);
            setSearchValue('');
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [products]);

    return (
        carregando ? <Loading /> : (
            <div className="wrap-home">
                <div className="home-container container">
                    <div className="home-box">
                        <div className="carrosel">
                            <div className="slogan">
                                <p>"Descubra um universo onde a qualidade literária encontra a acessibilidade"</p>
                            </div>
                        </div>
                        <div className="ranking-livros">
                            <h1>Ranking de Livros</h1>
                            <Podio positions={top3} />
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
            </div>
        )
    );
}

export default Home;
