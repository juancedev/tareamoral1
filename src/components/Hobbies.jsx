const Hobbies = () => {

    const sayHi = () => {
        swal("Hello World")
      }


    return (
        <div className="hobbies card" onClick={() => sayHi()}>
            <h1>Mis Hobbies</h1>
            <ul>
                <li>Leer</li>
                <li>Ver películas</li>
                <li>Cocinar</li>
                <li>Fotografía </li>
                <li>Producción audiovisual </li>
            </ul>
        </div>
    )
}
export default Hobbies