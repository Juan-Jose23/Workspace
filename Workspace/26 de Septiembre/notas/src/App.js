import logo from './logo.svg';
import './App.css';
import Lista from './Lista';
import Footer from './Footer';

function App() {
  let estudiantes = [
    {nombre: "Fulanito", apellido: "De Tal"},
    {nombre: "Peranito", apellido: "Pérez"},
    {nombre: "Menganito", apellido: "Rivera"},
    {nombre: "Jerónimo", apellido: "Arroyave"},
    {nombre: "Juan", apellido: "Salgado"},
    {nombre: "Johan", apellido: "Vásquez"},
    {nombre: "Simón", apellido: "Ávila"},
    {nombre: "Dylan", apellido: "Ocampo"},
  ];
  return (
    <div className="App">
      <Lista listaestudiantes={estudiantes} />
      <Footer />
    </div>
  );
}

export default App;
