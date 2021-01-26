import React, { Component } from 'react';

class Carrinho extends React.Component {
    render() {
        return( 
            <div className="grid-container-carrinho">
                <h1>Carrinho</h1>
                <label>{this.props.qtdeCarrinho}</label>
            </div>
        );
    }
}

export default Carrinho;