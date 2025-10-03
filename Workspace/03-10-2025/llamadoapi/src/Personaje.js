import './Personaje.css';

function Personaje({name, status, image}){
    return(
        <div className='personajeclase'>
            <h1>{name}</h1> <hr />
            <h2>{status}</h2> <hr />
            
        </div>
    )
}
export default Personaje;