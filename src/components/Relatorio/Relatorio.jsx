import React, { useState, useContext, useEffect } from 'react';
import './Relatorio.css';
import AppContext from '../../context/AppContext';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

import fetchTotalbooks from '../../api/fetchTotalbooks';
import fetchTotalfunc from '../../api/fetchTotalfunc';
import fetchTotalEditora from '../../api/fetchTotalEditora';

const Relatorio = () => {
  const { carregando, setLoading } = useContext(AppContext);
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalFunc, setTotalFunc] = useState(0);
  const [totalEditora, setTotalEditora] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [books, func, editora] = await Promise.all([
        fetchTotalbooks(),
        fetchTotalfunc(),
        fetchTotalEditora()
      ]);
      setTotalBooks(books);
      setTotalFunc(func);
      setTotalEditora(editora);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    carregando ? <Loading /> :
      <div className="dash-container">
        <div className="dash-box">
          <h1>Bem vindo, Visitante!</h1>
          <div className="info-box">
            <h2>Total de livros</h2>
            <p>{totalBooks}</p>
          </div>
          <div className="info-box">
            <h2>Total de funcionários</h2>
            <p>{totalFunc}</p>
          </div>
          <div className="info-box">
            <h2>Total de Editoras</h2>
            <p>{totalEditora}</p>
          </div>
          <Link to="/dashboard">
              <button className="cancelar" type="submit"> <h2>Voltar</h2>
              </button>
            </Link>
        </div>
      </div>
  );
};

export default Relatorio;
