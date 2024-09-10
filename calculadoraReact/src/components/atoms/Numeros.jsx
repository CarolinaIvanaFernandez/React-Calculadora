// eslint-disable-next-line react/prop-types
function Numeros({ setInput, input }) {
    const handleClick = (num) => {
      setInput(input + num.toString());  
    };
  
    return (
      <div className="numeros-grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
      </div>
    );
  }
  
  export default Numeros;