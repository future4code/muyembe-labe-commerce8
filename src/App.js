import React, { Component } from 'react';
import './App.css';
import Produto from "./components/Produto";
import Carrinho from "./components/Carrinho";
import FiltroValorProduto from "./components/FiltroValorProduto";
import FiltroNomeProduto from "./components/FiltroNomeProduto";


class App extends Component {
  render() {
    return (
      <div className="container-grid App" >
        <div>
          <h1> Filtro </h1>
          <FiltroValorProduto listaProduto={listaFiltrada.valor} min={1000.00} max={4000.00}/>
          <FiltroNomeProduto listaProduto={listaFiltrada.nome} nome={''}/>
        </div>
        <Produto />
        <Carrinho />  
      </div>
    );
  }
}

export default App;
