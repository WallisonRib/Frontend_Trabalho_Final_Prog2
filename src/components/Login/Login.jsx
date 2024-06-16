import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      
      <div className="login-box">
        <h2>Login Funcionário!</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button className='submit' type="submit">Login</button>

          <p>Problemas com o login? contate o <strong>suporte</strong></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
