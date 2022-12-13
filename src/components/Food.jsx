const Food = () => {

    const sayHi = () => {
        swal("Hello World")
      }

    return (
        <div className="food card" onClick={() => sayHi()}>
            <h1>Mi comida favorita</h1>
            <ul>
                <li>Cerdo al barril 🤤</li>
                <li>Baby beef</li>
                <li>Arroz con pollo</li>
                <li>Pasta a la Boloñesa</li>
                <li>Lasaña</li>
            </ul>
        </div>
    )
}
export default Food