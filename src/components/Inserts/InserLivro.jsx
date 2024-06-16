import React, { useState, useEffect } from 'react';
import './Inserts.css';
import { Link } from 'react-router-dom';

const InsertLivro = () => {
  const [formData, setFormData] = useState({
    isbn: '',
    nome: '',
    datapub: '',
    autor: '',
    genero: '',
    editora: '',
    data_reg: getCurrentDateTime(),
    descricao: '',
    foto: '',
    linkmenorpreco: '',
    preco: ''
  });

  // Lista de funcionários, autores, gêneros e editoras (normalmente buscaria de uma API)
  const [funcionarios, setFuncionarios] = useState([
    { cpf: '12345678910', nome: 'Joao da Silva' },
    { cpf: '01987654321', nome: 'Rosana Silveira' },
    { cpf: '34567890123', nome: 'Carla Albino' },
    { cpf: '12345678900', nome: 'João' }
    // Adicione mais funcionários conforme necessário
  ]);
  const [autores, setAutores] = useState([
    { cpf: '12345678901234', nome: 'Barry Burd' },
    { cpf: '20607822000142', nome: 'Flavio Cafiero' },
    { cpf: '13464321651351', nome: 'Mary Shelley' },
    { cpf: '54276936000179', nome: 'Heather Heying' },
    { cpf: '00000000000000', nome: 'Bret Weinstein' },
    { cpf: '20532842000100', nome: 'Ernesto Rodrigues' },
    { cpf: '19794783000150', nome: 'Jose de Alencar' },
    { cpf: '92959006003809', nome: 'Richard Blum' },
    { cpf: '44545678221234', nome: 'Kristin Hannah' },
    { cpf: '44321999221222', nome: 'A.J Finn' },
    { cpf: '11321543221234', nome: 'Abby Jimenez' },
    { cpf: '21333541121276', nome: 'Kristen Ciccarelli' },
    { cpf: '14325524521336', nome: 'Laura Sebastian' },
    { cpf: '35467543879656', nome: 'Nicola Morgan' },
    { cpf: '78546785412198', nome: 'J. T. Geissinger' },
    { cpf: '04727226000140', nome: 'Clarice Lispector' },
    { cpf: '50396851000173', nome: 'Tom Wolfe' },
    { cpf: '67577832970054', nome: 'Jonathan Safran Foer' },
    { cpf: '67090963875622', nome: 'Leon Hendrix' },
    { cpf: '12345678901', nome: 'Alice Zhao' }
    // Adicione mais autores conforme necessário
  ]);

  // Lista de gêneros e editoras (normalmente buscaria de uma API)
  const [generos, setGeneros] = useState([
    { id: 1, nome: 'Romance' },
    { id: 2, nome: 'Biografia' },
    { id: 3, nome: 'Ficção' },
    { id: 4, nome: 'Terror' },
    { id: 5, nome: 'Didático' },
    { id: 11, nome: 'Programação' },
    { id: 6, nome: 'Thriller' },
    { id: 7, nome: 'Fantasia' },
    { id: 8, nome: 'Policial' }
    // Adicione mais gêneros conforme necessário
  ]);

  const [editoras, setEditoras] = useState([
    { cnpj: '04713695000100', nome: 'Alta Books' },
    { cnpj: '06985027000167', nome: 'Arqueiro' },
    { cnpj: '42444703000582', nome: 'Rocco' },
    { cnpj: '10291239000186', nome: 'Novatec' }
    // Adicione mais editoras conforme necessário
  ]);


  function getCurrentDateTime() {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 16);
    return formattedDate;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert('Livro inserido com sucesso!');
    // Reset form after submission (optional)
    // setFormData({ ...formData, data_reg: getCurrentDateTime() });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="wraplivro">
      <div className="Insert-livro">
        <div className="Insert-box-livro">
          <h2>Inserindo um Livro</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="isbn">ISBN</label>
              <input type="text" id="isbn" name="isbn" value={formData.isbn} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label htmlFor="autor">Autor</label>
              <select id="autor" name="autor" value={formData.autor} onChange={handleChange} required>
                <option value="">Selecione um Autor</option>
                {autores.map(autor => (
                  <option key={autor.id} value={autor.nome}>{autor.nome}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="genero">Gênero</label>
              <select id="genero" name="genero" value={formData.genero} onChange={handleChange} required>
                <option value="">Selecione um Gênero</option>
                {generos.map(genero => (
                  <option key={genero.id} value={genero.nome}>{genero.nome}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label htmlFor="datapub">Data de Publicação</label>
              <input type="date" id="datapub" name="datapub" value={formData.datapub} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label htmlFor="editora">Editora</label>
              <select id="editora" name="editora" value={formData.editora} onChange={handleChange} required>
                <option value="">Selecione uma editora</option>
                {editoras.map(editora => (
                  <option key={editora.cnpj} value={editora.nome}>{editora.nome}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="data_reg">Data de Registro</label>
              <input type="datetime-local" id="data_reg" name="data_reg" value={formData.data_reg} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label htmlFor="descricao">Descrição</label>
              <textarea id="descricao" name="descricao" rows="2" value={formData.descricao} onChange={handleChange} required></textarea>
            </div>

            <div className="input-group">
              <label htmlFor="foto">URL da Foto</label>
              <input type="url" id="foto" name="foto" value={formData.foto} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label htmlFor="linkmenorpreco">Link para o Menor Preço</label>
              <input type="url" id="linkmenorpreco" name="linkmenorpreco" value={formData.linkmenorpreco} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label htmlFor="preco">Preço</label>
              <input type="number" id="preco" name="preco" step="0.01" value={formData.preco} onChange={handleChange} required />
            </div>

            <button className="submit" type="submit">Enviar</button>
            <Link to="/dashboard">
              <button className="cancel" type="button">Cancelar</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InsertLivro;
