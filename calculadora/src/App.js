import './App.css';
import dog from './Imagenes/dog.jpg';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs'; //agregué la dependencia de mathjs -librería externa



function App() {

const [input, setInput] = useState('');

const agregarInput = val => {
  setInput(input + val);
}

const calcularResultado =() => {
  if (input) {
  setInput (evaluate(input));
}else {
  alert('por favor ingrese valores para realizar calculos')
}

}

  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
      <img 
      src={dog}
      className='freecodecamp-logo'
      alt = 'logo'/>
    </div>
    <div className='contenedor-calculadora'>
    <Pantalla input={input}/>
    <div className='fila'>
      <Boton manejarClic={agregarInput}>1</Boton>
      <Boton manejarClic={agregarInput}>2</Boton>
      <Boton manejarClic={agregarInput}>3</Boton>
      <Boton manejarClic={agregarInput}>+</Boton>
    </div>
    <div className='fila'>
      <Boton manejarClic={agregarInput}>4</Boton>
      <Boton manejarClic={agregarInput}>5</Boton>
      <Boton manejarClic={agregarInput}>6</Boton>
      <Boton manejarClic={agregarInput}>-</Boton>
    </div>
    <div className='fila'>
      <Boton manejarClic={agregarInput}>7</Boton>
      <Boton manejarClic={agregarInput}>8</Boton>
      <Boton manejarClic={agregarInput}>9</Boton>
      <Boton manejarClic={agregarInput}>*</Boton>
    </div>
    <div className='fila'>
      <Boton manejarClic={calcularResultado}>=</Boton>
      <Boton manejarClic={agregarInput}>0</Boton>
      <Boton manejarClic={agregarInput}>.</Boton>
      <Boton manejarClic={agregarInput}>/</Boton>
    </div>
    <div className='fila'></div>
    <BotonClear manejarClear={() => setInput('')}>
      CLEAR
      </BotonClear>
    </div>
    </div>
  );
}

export default App;
