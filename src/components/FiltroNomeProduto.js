import React from "react";
import Produto from './components/Produto';
import './App.css';

function listaProduto(props) {
    const listaFiltrada = props.lista.filter((listaProduto) => {
        if (listaProduto.nome.includes(props.nome)) {
            return true
        }
        else {
            return false
        }
    }

    )


    return (
        <div>
            <h2>
                Filtro
            </h2>
            <ul>
                {listaFiltrada.map(listaProduto => {
                    return (
                        <li>
                            {listaProduto.nome}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Filtro;