import logo from './logo.svg';
import './App.css';
import Componente from './Componente.js';
import Estudiante from './Estudiante.js';

function App() {
  return (
    <div className="App">
      <Componente />
      <Estudiante nombre={'pepito'} apellido={'perez'} />
      <Estudiante nombre={'juanito'} apellido={'alimaña'} />
    </div>
  );
}

export default App;
