import React from 'react';
import '../App.css';

class Produto extends React.Component {

    listaFinalDeProdutos = this.props.produtos.map((prdt) => {
        return (
            <div className="produto">
                <div>
                    <img src={prdt.caminhoImagem} className="imagem" />
                </div>
                <div>
                    <span>{prdt.nome}</span>
                </div>
                <div>
                    <span> <b>Valor:</b> R$ {prdt.valor}</span>
                </div>
                <button onClick={() => this.props.onClickAddCarrinho(prdt.id)}> Adicionar ao Carrinho </button>
            </div>
        );

    });

    render() {
        const produtos = this.listaFinalDeProdutos;
        return (
            <div className="container-grid-produto">
                {produtos}
            </div>);
    }
}

export default Produto;
