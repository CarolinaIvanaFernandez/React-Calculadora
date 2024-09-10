// eslint-disable-next-line react/prop-types
function Pantalla({ numeros, resultado }) {
    return (
      <div className="pantalla">
        <div className="operaciones-numeros">
          {numeros}  
        </div>
        <div className="resultado">
          {resultado}  
        </div>
      </div>
    );
  }
  
  export default Pantalla;