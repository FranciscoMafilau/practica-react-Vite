import React from "react";
import './hojasDeEstilo/contador.css';

class Contador extends React.Component {
  render(){
      return (
    <div className='contador'>
      { this.props.numClics }
    </div>
  );
  }
}
export default Contador;

/*

componente funcional
function Contador ({ numClics }){
     return (
    <div className='contador'>
      { numClics }
    </div>
  );
  }
}

export default Contador;*/