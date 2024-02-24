import React from "react";
import '../hojas-de-estilo/Testimonio.css';

//exportación nombrada
// export funtion Testimonio()
//no se invoca al final la exportación
//y en donde se encuentra el componente se utilizan llaves dentro de la importación para poder llamarla
// se pueden exportar variosimport Testimonio from './Testimonio';

// el ejemplo que sigue es por defecto

function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt= {props.nombre} /> 
      <div className= 'contenedor-texto-testimonio'>
      <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
      <p className='cargo-testomonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
      <p className='texto-testimonio'>{props.testimonio}</p>
      </div>

    </div>
  )
}

export default Testimonio;