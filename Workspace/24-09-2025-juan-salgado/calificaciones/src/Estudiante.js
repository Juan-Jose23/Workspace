import './Estudiante.css';

function Estudiante({ nombre, apellido }){
    return(
        <div className='estudiante'>
            <div className='nombre'>
                {nombre} |
            </div>
            <div className='apellido'>
                {apellido}
            </div>
        </div>
    );
}

export default Estudiante;