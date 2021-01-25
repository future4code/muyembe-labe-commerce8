import React, { Component } from 'react';
import './App.css';
import Produto from "./components/Produto";
import Carrinho from "./components/Carrinho";
import Filtro from './components/Filtro'

class App extends Component {

  state = {
    quantidade: 0
  }

  listaProduto = [
    { id: 1, nome: 'Explorer 1', valor: 1000.00, caminhoImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Explorer1.jpg/200px-Explorer1.jpg" },
    { id: 2, nome: 'Explorer 6', valor: 1000.00, caminhoImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Explorer_6_paddles_up.jpg/1200px-Explorer_6_paddles_up.jpg" },
    { id: 3, nome: 'Vostok 1', valor: 4000.00, caminhoImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Vostok_spacecraft.jpg/300px-Vostok_spacecraft.jpg" },
    { id: 4, nome: 'Luna 10', valor: 4000.00, caminhoImagem: "https://upload.wikimedia.org/wikipedia/commons/9/93/Luna_10_Musee_du_Bourget_P1010504.JPG" },
    { id: 5, nome: 'Mariner 9', valor: 6000.00, caminhoImagem: "https://upload.wikimedia.org/wikipedia/commons/1/11/Mariner09.jpg" },
    { id: 6, nome: 'Venera 9', valor: 6000.00, caminhoImagem: "https://img.ibxk.com.br/2020/10/09/09001456809482.jpg" },
  ];


  onClickAddCarrinho = (id) => {
    this.setState({quantidade: this.state.quantidade + 1});

  }

  render() {
    return (
      <div className="container-grid App" >
        <Filtro />
        <Produto
          onClickAddCarrinho={this.onClickAddCarrinho}
          produtos={this.listaProduto}
        />
        <Carrinho qtdeCarrinho={this.state.quantidade} />

      </div>
    );
  }
}

export default App;
