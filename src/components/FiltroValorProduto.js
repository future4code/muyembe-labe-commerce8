import React from "react"

function FiltroValorProduto(props) {
    const listaFiltrada = props.listaProduto.filter((listaProduto) => {
        if (listaProduto.valor > props.min){
            return true 
        } else {
            return false
        }
        
    }).filter((valor) => {
        if (listaProduto.valor < props.max){
            return true
        } else {
            return false
        }
    })

    console.log(listaFiltrada)
    return (
        <div>
            <h3>Valor</h3>
            <ul>
                {listaFiltrada.map(valor => {
                    return <li>{valor}</li>;
                })}
            </ul>
        </div>
    )
}

export default FiltroValorProduto;