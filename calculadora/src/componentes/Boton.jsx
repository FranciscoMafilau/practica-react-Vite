import React from 'react';
import '../hojasDeEstilo/Boton.css';

function Boton (props) {
  
  const esOperador = valor => {
    return isNaN(valor) && (valor !=='.') && (valor !== '=');};
  
  
  return (
    <div className= {`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
          onClick={() => props.manejarClic(props.children)}> 
          
      {props.children} 
    </div>
  );}

export default Boton;


//el onClick queda formulado como una función anónima. Agregamos la función flecha [ () => ] para crear una nueva función 
//y no solo llamar a la función y activar el eventlistener
