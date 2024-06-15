import React, { useState, useContext, useEffect } from 'react';
import './Dashboard.css';
import AppContext from '../../context/AppContext';
import Loading from '../Loading/Loading';

import fetchTotalbooks from '../../api/fetchTotalbooks';
import fetchTotalfunc from '../../api/fetchTotalfunc';
import fetchTotalEditora from '../../api/fetchTotalEditora';



const Dashboard = () => {
  const { carregando, setLoading } = useContext(AppContext);
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalFunc, setTotalFunc] = useState(0);
  const [totalEditora, setTotalEditora] = useState(0);



  const fetchBooks = async () => {
    setLoading(true);
    const fetchedTotalBooks = await fetchTotalbooks();
    setTotalBooks(fetchedTotalBooks);
    setLoading(false);
  };
  
  const fetchFunc = async () => {
    setLoading(true);
    const fetchedTotalFunc = await fetchTotalfunc();
    setTotalFunc(fetchedTotalFunc);
    setLoading(false);
  };

  const fetchEditora = async () => {
    setLoading(true);
    const fetchedTotalEditora = await fetchTotalEditora();
    setTotalEditora(fetchedTotalEditora);
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
    fetchFunc();
    fetchEditora();
  }, []);

  return (
    (carregando ? <Loading /> :

      <div className="dash-container">
        <div className="dash-box">
          <h1>Bem vindo, Visitante!</h1>
          <h2>Total de livros: {totalBooks}</h2>
          <h2>Total de funcionários: {totalFunc}</h2>
          <h2>Total de Editora: {totalEditora}</h2>


        </div>
      </div>)
  );
};

export default Dashboard;
