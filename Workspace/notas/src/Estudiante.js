import "./Estudiante.css";

function Estudiante({ nombre, apellido, email }) {
  return (
    <div className="container-nombre">
      <h1 className='nombre'>{nombre} {apellido} {email} </h1>
    </div>
  );
}

export default Estudiante;              