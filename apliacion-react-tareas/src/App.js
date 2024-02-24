import logo from './logo.svg';
import './App.css';
import { React } from 'react';
import arana from './imagenes/arana.jpg';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className= 'freecodecamp-logo-contenedor'>
        <img
        src={arana}
        className='freecodecamp-logo'/>
      </div>
        
        
      <div className='tarea-lista-principal'>
            <h1>Mis Tareas</h1>
           <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
