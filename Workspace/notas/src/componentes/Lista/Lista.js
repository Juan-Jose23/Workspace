import './Lista.css'
import Estudiante from '../../Estudiante';


export function Lista({ listaEstudiantes }) {
    return (
        <div className='lista'>
            <ol>
                {listaEstudiantes.map((elemento, indice) => (
                    <li className='estudiante'><Estudiante nombre={elemento.nombre} apellido={elemento.apellido} /></li>
                ))}
            </ol>
        </div>
    )
}
