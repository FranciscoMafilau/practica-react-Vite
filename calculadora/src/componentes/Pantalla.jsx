import React from 'react';
import '../hojasDeEstilo/Pantalla.css';


const Pantalla = ({input}) => ( //definimos el componente con una función flecha
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;