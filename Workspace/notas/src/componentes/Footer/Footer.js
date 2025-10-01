import './Footer.css'
import Estudiante from '../../Estudiante';

export function Footer() {
    let estudiantes = [
        {
            nombre: 'Thomas',
            apellido: 'Zapata',
            email: 'thomascanozapata@gmail.com'
        },

    ];

    return (
        <div className='footer'>
            {estudiantes.map((elemento, indice) => (
                <li className='estudiante'><Estudiante nombre={elemento.nombre} apellido={elemento.apellido} email={elemento.email}/></li>
            ))}
        </div>
    )
}
