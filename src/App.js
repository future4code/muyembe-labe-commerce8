import React, { Component } from 'react';
import './App.css';
import Produto from "./components/Produto";
import Carrinho from "./components/Carrinho";

class App extends Component {
  render() {
    return (
      <div className="container-grid App" >
        <div>
          <h1> Filtro </h1>
        </div>
        <Produto />
        <Carrinho />
      </div>
    );
  }
}

export default App;
