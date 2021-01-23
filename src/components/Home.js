import React from 'react';
import '../App.css';
import Produto from "./Produto";

class Home extends React.Component{
  state = {
      pagina: "Home"
  }; 

  onClickCarrinho = () => {
      this.setState({
          pagina: "Home"
      })

     console.log('produtoAdicionado');
    
  }

  
  render () {
    
    
    return (
     //<div><h1>bananinha</h1></div>
        <Produto/>
        
    );
 }
}

export default Home;