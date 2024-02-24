import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>ESTO PUEDE SER UN TITULO</h1>
     <Testimonio 
      nombre='Maya'
      pais='Argentina'
      imagen='perro'
      cargo='perra de guardia'
      empresa='Rosario'
      testimonio='perra hinchapelotas'
     /> 
    <Testimonio 
      nombre='Tyger'
      pais='India'
      imagen='tigre'
      cargo='señor de la Jungla'
      empresa='Bali'
      testimonio='mayor depredador de Asia'
     /> 
    </div>
    </div>
  );
}

export default App;
