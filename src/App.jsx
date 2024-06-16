import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Provider from "./context/Provider";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isLogin = location.pathname === '/login';
  const isInsertLivro = location.pathname === '/dashboard/insertlivro';
  const isInsertEditora = location.pathname === '/dashboard/inserteditora' ;
  const isInsertAutor = location.pathname === '/dashboard/insertautor' ;
  const isRelatorio = location.pathname === '/dashboard/relatorio' ;

  return (
    <Provider>
      {!isLogin && !isDashboard && !isInsertLivro && !isInsertEditora && !isInsertAutor && !isRelatorio && <Header />}
      <Outlet />
    </Provider>
  );
}

export default App;
