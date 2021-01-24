import React, { Component } from 'react'

export function carrinho(params) {
    return (
        <div className="botao-add-carrinho">
            <button >
                <div>
                    <span> Adicionar ao carrinho.</span>
                </div>
                <div>
                    <img src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-carrinho-de-compras-icon-carrinho-de-compras-by-vexels.png" width="30px" />
                </div>
            </button>
        </div>
    );
}

export default carrinho