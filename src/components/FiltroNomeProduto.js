import React from "react"

function FiltroNomeProduto(props) {
    const listaFiltrada = props.listaProduto.filter((listaProduto) => {
        if (listaProduto.nome.includes(props.nome)) {
            return true 
        } else {
            return false
        }
        
    })


    console.log(listaFiltrada)
    return (
        <div>
            <h3>Nome Produto</h3>
            <ul>
                {listaFiltrada.map(listaProduto => {
                    return <li>{listaProduto.nome}</li>;
                })}
            </ul>
        </div>
    )
}

export default FiltroNomeProduto;