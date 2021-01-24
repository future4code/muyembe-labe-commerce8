import React from 'react';
import '../App.css';
import BotaoAddCarrinho from './BotaoAdicionarCarrinho'

let listaFinalDeProdutos = "";

const listaProduto = [
    { nome: 'Explorer 1', valor: 1000.00, caminhoImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Explorer1.jpg/200px-Explorer1.jpg" },
    { nome: 'Explorer 6', valor: 1000.00, caminhoImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Explorer_6_paddles_up.jpg/1200px-Explorer_6_paddles_up.jpg" },
    { nome: 'Vostok 1', valor: 4000.00, caminhoImagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Vostok_spacecraft.jpg/300px-Vostok_spacecraft.jpg" },
    { nome: 'Luna 10', valor: 4000.00, caminhoImagem: "https://upload.wikimedia.org/wikipedia/commons/9/93/Luna_10_Musee_du_Bourget_P1010504.JPG" },
    { nome: 'Mariner 9', valor: 6000.00, caminhoImagem: "https://upload.wikimedia.org/wikipedia/commons/1/11/Mariner09.jpg" },
    { nome: 'Venera 9', valor: 6000.00, caminhoImagem: "https://img.ibxk.com.br/2020/10/09/09001456809482.jpg" },
];

function adcionarAoCarrinho(){
    return true
}
function listarProdutos(listaProduto) {
    listaFinalDeProdutos = listaProduto.map(function (prdt) {
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
                <BotaoAddCarrinho Onclick={adcionarAoCarrinho}/>
            </div>
        );

    })

    return listaFinalDeProdutos
}

export function listaDeProduto() {
    const produtos = listarProdutos(listaProduto);
    return (
        <div className="container-grid-produto">
            {produtos}
        </div>
    );
}

export default listaDeProduto;
