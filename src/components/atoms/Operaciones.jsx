// eslint-disable-next-line react/prop-types
function Operaciones({ input, setInput, realizarOperacion }) {
    const handleClick = (valor) => {
      if (valor === 'C') {
        setInput(''); 
      } else if (valor === '=') {
        realizarOperacion(); 
      } else if (valor === 'DE') {
        setInput(input.slice(0, -1)); 
      } else if (valor === '.') {
        
        const partes = input.split(/[\+\-\*\/]/);  
        const ultimaParte = partes[partes.length - 1];
        if (!ultimaParte.includes('.')) {
          setInput(input + valor);  
        }
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
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('DE')}>DE</button> 
        <button onClick={() => handleClick('=')}>=</button>
      </div>
    );
  }
  
  export default Operaciones;