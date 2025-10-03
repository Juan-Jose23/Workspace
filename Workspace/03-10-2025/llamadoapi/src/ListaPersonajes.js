import'./ListaPersonajes.css';
import Personaje from './Personaje';
import { useEffect, useState } from 'react';

function ListaPersonajes(){
      const [personajes, setPersonajes] = useState(null);
      useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/1')
        .then(res => res.json())
        .then(data => setPersonajes(data.results));
       }, []);
    return(
        <div className='personajes'>
            <h1>Lista de Personajes</h1>
            {personajes!= null ? (
                personajes.map((per, index)=>{
                    <Personaje name={per.name} status={per.status} />
                })
            ):
            (<h2>Cargando...</h2>)}
            {JSON.stringify(personajes)}
        </div>
    )
}

export default ListaPersonajes;