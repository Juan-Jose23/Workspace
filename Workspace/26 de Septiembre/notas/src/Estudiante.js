import './Estudiante.css';

function Estudiante({nombre, apellido}) {
    return(
        <div>
            <h1 className='nombre'>{nombre} {apellido}</h1>
        </div>
    )
}

export default Estudiante;