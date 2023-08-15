import React, { useState } from 'react';
import style from "./One.css";
import logo_bachega from "../../images/logo_bachega.png";

export function One() {
  const [nome, setNome] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [data, setData] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');

  const handleCpf = (e) => {
    const removeCaracterCpf = e.target.value.replace(/\D/g, '');
    setCpf(removeCaracterCpf);
  };

  const handleClick = () => {
    if (cpf.length !== 11) {
      alert('CPF inválido');
      return;
    }
  

  const salvaLocal = {
    nome,
    rg,
    cpf,
    data,
    endereco,
    cep,
  };
  localStorage.setItem('salvaLocal', JSON.stringify(salvaLocal));
  };
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className={style.One}>
      <div>
        <div>
          <img src={logo_bachega} alt="Logo" className="logo" />
          <h1 className="h1">BACHEGA </h1>
          <h2 className="h2">SOCIEDADE DE ADVOGADOS</h2>
        </div>
        <form action="">
          <div>
            <label>Nome completo</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label>Cpf</label>
            <input
              type="text"
              value={cpf}
              onChange={handleCpf}
            />
          </div>
          <div>
            <label>Rg</label>
            <input
              type="text"
              value={rg}
              onChange={(e) => setRg(e.target.value)}
            />
            <label>Data de nasc</label>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />

            <div>
              <label>CEP</label>
              <input
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>

            <div>
              <label>Endereço completo</label>
              <input
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
            <div>
              <button onClick={handleClick}>➝</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
