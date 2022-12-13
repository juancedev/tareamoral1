const AboutMe = () => {

    const userData = {
        nombre: "Juan Carlos",
        pelicula: "El Club de la Pelea",
        libro: "Cuentos completos (Asimov, Isaac)",
        banda: "Black Keys"
    }

    const sayHi = () => {
        swal("Hello World")
      }

    return (
        <div className="about-me card" onClick={() => sayHi()}>
            <h1>Sobre mí</h1>
            <ul>
                <li><strong>Nombre: </strong>{userData.nombre}</li>
                <li><strong>Película favorita: </strong>{userData.pelicula}</li>
                <li><strong>Libro favorito: </strong>{userData.libro}</li>
                <li><strong>Banda favorita: </strong>{userData.banda}</li>
            </ul>
        </div>
    )
}

export default AboutMe