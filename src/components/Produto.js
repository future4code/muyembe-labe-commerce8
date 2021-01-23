    import React from 'react';
    import '../App.css';

    class Produto extends React.Component{
        state = {
            pagina: "Produto"
        }; 
    
        listaProduto = [
            {nome:'Explorer 1', valor:1000.00, caminhoImagem:""},
            {nome:'Explorer 6', valor:1000.00, caminhoImagem:""},
            {nome:'TIROS-1', valor:3000.00, caminhoImagem:""},
            {nome:'Vostok 1', valor:4000.00, caminhoImagem:""},
            {nome:'Luna 10', valor:4000.00, caminhoImagem:""},
            {nome:'Mariner 9', valor:6000.00, caminhoImagem:""},
            {nome:'Venera 9', valor:6000.00, caminhoImagem:""},
         ];

        criarProduto = (listaProduto) => {
                const produtos = listaProduto.map((produto) => {
                   // console.log(produto.nome);
                    let nomeSatelite = produto.nome;
                    return (
                        <div>
                            {nomeSatelite}
                        </div>
                    );
                          
                }

            )
            
        }
        
        render () {
            console.log(this.listaProduto);
            const produtoFinal = this.criarProduto(this.listaProduto);
            console.log(produtoFinal);
            
            return (
             <div className = "produto">
                 {produtoFinal}
             </div>
            );
        }
    }

    export default Produto;