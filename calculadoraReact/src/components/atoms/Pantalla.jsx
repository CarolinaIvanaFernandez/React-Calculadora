// eslint-disable-next-line react/prop-types
function Pantalla ({Numeros, Operaciones, Resultado}) {
    return (
        <div className="pantalla">
            <div className="operaciones-numeros">
                {Numeros} {Operaciones}
            </div>
            <div className="resultado">
                {Resultado}
            </div>
        </div>
    );
}
export default Pantalla;