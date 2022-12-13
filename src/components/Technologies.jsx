const Technologies = () => {

    const sayHi = () => {
        swal("Hello World")
      }


    return (
        <div className="stack card" onClick={() => sayHi()}>
            <h1>Mi stack es</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </div>
    )
}
export default Technologies