//import { Link } from "react-router-dom";

const Peliculas =  ({ peliculas }) => {
    return (              
        <div key={peliculas.id}>
            <img src={peliculas.movie_banner} alt="Banner de la pelicula" />
            <h3>{peliculas.original_title}</h3> 
            <h1>{peliculas.title.es}</h1>
            <h5>{peliculas.description.es}</h5>
            <h6>{peliculas.director} | {peliculas.producer} | {peliculas.release_date} </h6>
        </div>
    )}
export default Peliculas