import React from "react";
import '../hojasDeEstilo/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea ( { id, texto, completada, completarTarea, eliminarTarea } ) {
  return (
    <div className= {completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className="tarea-texto"
        onClick={() => completarTarea(id)}> 
        {texto} 
      </div>

      <div className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tarea-icono" /> 
      </div>

    </div>
  )
}

export default Tarea;




//línea 9 y 14 creamos una función anónima

//en la línea 15 paso un props para cambiar tamaño del icono