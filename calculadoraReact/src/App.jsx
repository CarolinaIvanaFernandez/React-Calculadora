import { useState } from 'react';
import './App.css';
import Pantalla from './components/atoms/Pantalla';
import Numeros from './components/atoms/Numeros';
import Operaciones from './components/atoms/Operaciones';

function App() {
  const [input, setInput] = useState('');  
  const [resultado, setResultado] = useState(''); 

  
  const realizarOperacion = () => {
    try {
      const evaluado = calcular(input); 
      setResultado(evaluado);  
    } catch (error) {
      setResultado('Error');
    }
  };


  const calcular = (expresion) => {
    try {
      const evaluado = new Function('return ' + expresion)();
      return evaluado.toString();  
    } catch {
      return 'Error';
    }
  };

  return (
    <div className="Calculadora">
      
      <Pantalla numeros={input} resultado={resultado} />
      <Numeros setInput={setInput} input={input} />
      <Operaciones setInput={setInput} input={input} realizarOperacion={realizarOperacion} />
    </div>
  );
}

export default App;