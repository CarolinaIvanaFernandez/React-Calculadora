import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Operaciones ({input, setInput, realizarOperacion}) {
    const [operacion, setOperacion] = useState('');
    const [pantalla, setPantalla] = useState('');

    
  const handleClick = (valor) => {
    if (valor === 'C') {
      setInput('');
    } else if (valor === '=') {
      realizarOperacion();
    } else {
      setInput(input + valor);
    }
  };

  return (
    <div className="operaciones">
      <button onClick={() => handleClick('C')}>C</button>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('*')}>*</button>
      <button onClick={() => handleClick('/')}>/</button>
      <button onClick={() => handleClick('=')}>=</button>
    </div>
  );
}

export default Operaciones;