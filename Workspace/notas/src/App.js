import './App.css';
import { Lista } from './componentes/Lista/Lista';
import { Footer } from './componentes/Footer/Footer';

function App() {
  let estudiantes = [
    { nombre: 'Thomas', apellido: 'Zapata' },
    { nombre: 'Jaider', apellido: 'Alvarez' },
    { nombre: 'Daniel', apellido: 'Fonseca' },
    { nombre: 'Cristiano', apellido: 'Ronaldo' },
    { nombre: 'Kun', apellido: 'Aguero' },
    { nombre: 'Ousmane', apellido: 'Dembelé' },
    { nombre: 'Lamine', apellido: 'Yamal' },
    { nombre: 'Luiz', apellido: 'Diaz' }
  ];

  return (
    <>
      <Lista listaEstudiantes={estudiantes} />
      <Footer />
    </>
  );
}

export default App;