import React from "react";
import './hojasDeEstilo/boton.css';
/*import Boton from './Boton';*/

class Boton extends React.Component{
  render(){
    return(
    <button 
    className={ this.props.esBotonDeClic ? 'boton-Clic' : 'boton-reiniciar' } 
    onClick ={this.props.manejaClic}>
    {this.props.texto} 
  </button>
);
}
  }
  export default Boton;

/*
/////componente funcional
function Boton({texto, esBotonDeClic, manejaClic}){ 
                                          sintaxis de desestructuración, no lo usas  como props que sino directametne como variable
                                         esBotonDeClick es un operador ternario
                                         manejaClic es una función.
                                         tenemos 3 props
  return (
      <button 
        className={ esBotonDeClic ? 'boton-Clic' : 'boton-reiniciar' } 
        onClick ={manejaClic}>
        {texto} 
      </button> //es un operador tenrnario condicional (if)
    )
}
*/
