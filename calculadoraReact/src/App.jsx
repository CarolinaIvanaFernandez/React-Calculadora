import { useState } from 'react'
import './App.css'
import Pantalla from './components/atoms/Pantalla';
import Numeros from './components/atoms/Numeros';
import Operaciones from './components/atoms/Operaciones'

function App() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState(0);

  // Función para realizar la operación
  const realizarOperacion = () => {
    try {
      const evaluado = calcular(input); // Aquí llamamos a nuestra función personalizada
      setResultado(evaluado);
    } catch (error) {
      setResultado('Error');
    }
  };

  // Función personalizada que evalúa la operación sin usar eval()
  const calcular = (expresion) => {
    const tokens = expresion.match(/(\d+(\.\d+)?|\+|\-|\*|\/)/g); // Extraemos números y operadores
    if (!tokens) return 'Error';

    // 1. Primero resolver multiplicaciones y divisiones
    const prioridadResuelta = resolverPrioridad(tokens, ['*', '/']);

    // 2. Luego resolver sumas y restas
    const resultadoFinal = resolverPrioridad(prioridadResuelta, ['+', '-']);

    return resultadoFinal.length === 1 ? resultadoFinal[0] : 'Error';
  };

  const resolverPrioridad = (tokens, operadores) => {
    let resultado = [...tokens];
    for (let i = 0; i < resultado.length; i++) {
      const token = resultado[i];
      if (operadores.includes(token)) {
        const anterior = parseFloat(resultado[i - 1]);
        const siguiente = parseFloat(resultado[i + 1]);

        let calculo = 0;
        if (token === '*') calculo = anterior * siguiente;
        if (token === '/') calculo = siguiente !== 0 ? anterior / siguiente : 'Error';
        if (token === '+') calculo = anterior + siguiente;
        if (token === '-') calculo = anterior - siguiente;

        resultado.splice(i - 1, 3, calculo); // Reemplazar los tres valores por el resultado
        i -= 1; // Retroceder el índice para continuar revisando
      }
    }
    return resultado;
  };

  return (
    <>
      <div className='Calculadora'>
        <Pantalla Numeros={input} Resultado={resultado} />
        <Numeros setInput={setInput} input={input} />
        <Operaciones setInput={setInput} input={input} realizarOperacion={realizarOperacion} />
      </div>
    </>
  );
}

export default App;