import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logo from './imagenes/logo.jpg';
import { useState } from 'react';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();
    this.state= {
      numClics: 0
    };
    this.manejaClic = this.manejaClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
    ///tengo que agregar estas líneas para asociar el this del constructor con el this del método
  }

  manejaClic(){
    this.setState(({ numClics })=> ({ numClics: numClics + 1}));
  }


  reiniciarContador(){
    this.setState({ numClics: 0 });
  }

  
  render(){
    return (
      <div className="App">
      <div className='freecodecamp-logo-contenedor'>
      <img
        className='freecodecamp-logo'
        src={this.props.logo}
        alt="logo"/>
      </div>
  
      <div className='contenedor-principal'>
        <Contador numClics= {this.state.numClics}/>
        <Boton 
          texto="CLIC"
          esBotonDeClic={true}
          manejaClic ={this.manejaClic}>
          
        </Boton>
        <Boton 
          texto='REINICIAR'
          esBotonDeClic={false}
          manejaClic ={this.reiniciarContador}>
          
        </Boton>
      </div>
     
      </div>
    );
  }
}
export default App;

/*
function App() {
  
const [numClics, setNumClics] =  useState(0);//esto es un hook - esto es un arreglo con una función

const manejaClic =() => { 
setNumClics(numClics +1);
}

const reiniciarContador = () =>{
  setNumClics(0);
}

  /*asignamos una función flecha
  const manejaClic = () =>{
        console.log("CLIC");
  }

  const reiciarContador = () => {
        console.log("Reiniciar");
  }
  
  
  
  
  return (
    <div className="App">
    <div className='freecodecamp-logo-contenedor'>
    <img
      className='freecodecamp-logo'
      src={logo}
      alt="logo"/>
    </div>

    <div className='contenedor-principal'>
      <Contador numClics= {numClics}/>
      <Boton 
        texto="CLIC"
        esBotonDeClic={true}
        manejaClic ={manejaClic}>
        
      </Boton>
      <Boton 
        texto='REINICIAR'
        esBotonDeClic={false}
        manejaClic ={reiniciarContador}>
        
      </Boton>
    </div>
   
    </div>
  );
}

export default App;*/
