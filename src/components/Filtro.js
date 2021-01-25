import React from "react";
import Produto from './Produto';
import '../App.css';

class Filtro extends React.Component {
    render() {
        return (
            <div className="grid-container-filtro">
                <div>
                    <h1>Filtro</h1>
                </div>
                <div>
                    <label for="valor-min">Valor Minimo: </label>
                    <input />
                </div>
                <div>
                    <label for="valor-min">Valor Máximo: </label>
                    <input />
                </div>
                <div>
                    <label for="nome-produto">Nome: </label>
                    <input />
                </div>
                <div>
                    <button>Pesquisar</button>
                </div>
            </div>
        );
    }
}
export default Filtro;