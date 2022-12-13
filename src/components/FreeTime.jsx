const FreeTime = () => {

    const sayHi = () => {
        swal("Hello World")
      }


    return (
        <div className="free-time card" onClick={() => sayHi()}>
            <h1>En mi tiempo libre me gusta</h1>
            <ul>
                <li>¿Tiempo libre? ¿Qué es eso? 🤣</li>
                <li>Leer</li>
                <li>Ver películas o series de ciencia ficción</li>
                <li>Ver ánime</li>
                <li>Cocinar</li>
            </ul>
        </div>
    )
}
export default FreeTime