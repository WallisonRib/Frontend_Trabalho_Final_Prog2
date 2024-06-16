import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import {BrowserRouter, Routes, Route } from "react-router-dom"
import Item from './components/Item/Item.jsx'
import Search from './components/Search/Search.jsx'
import Login from './components/Login/Login.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'


import {register} from "swiper/element/bundle"
register();
    
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Home from './components/Home/Home.jsx'
import InsertLivro from './components/Inserts/InserLivro.jsx'
import InsertEditora from './components/Inserts/InsertEditora.jsx'
import InsertAutor from './components/Inserts/InsertAutor.jsx'
import Relatorio from './components/Relatorio/Relatorio.jsx'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login  />} />
          <Route path="item/:isbn" element={<Item />} />
          <Route path="search" element={<Search />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/insertlivro" element={<InsertLivro />} />
          <Route path="dashboard/inserteditora" element={<InsertEditora />} />
          <Route path="dashboard/insertautor" element={<InsertAutor />} />
          <Route path="dashboard/relatorio" element={<Relatorio />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);