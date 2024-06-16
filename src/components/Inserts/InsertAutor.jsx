import React, { useState } from 'react';
import './InsertEditora.css'; // Estilos CSS personalizados
import { Link } from 'react-router-dom'; // Importação do React Router DOM

const InsertAutor = () => {
  const [formData, setFormData] = useState({
    cnpj: '',
    nome: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert('Editora inserida com sucesso!');
    // Limpar formulário (opcional)
    // setFormData({ cnpj: '', nome: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="wrapeditora">
      <div className="Insert-editora">
        <div className="Insert-box-editora">
          <h2>Inserindo um autor</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="cnpj">CNPJ</label>
              <input type="text" id="cnpj" name="cnpj" value={formData.cnpj} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
            </div>

            <button className="submit" type="submit">Enviar</button>
            <Link to="/dashboard">
              <button className="cancel" type="submit">Cancelar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InsertAutor;
