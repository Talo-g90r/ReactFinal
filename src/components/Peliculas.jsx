//import { Link } from "react-router-dom";
import './Peliculas.css'

const Peliculas =  ({ peliculas }) => {
    return (              
        <div class="contenedor" key={peliculas.id}>
            <img class="fondo" src={peliculas.movie_banner} alt="Banner de la pelicula" />
            <div class="detalles">
                <div class="portada">
                    <img class="" id="peliculas-caratula" src={peliculas.image} alt="Caratula de la pelicula" />
                    <h3 class="" id="titulo">{peliculas.original_title}</h3> 
                </div>
                <div class="contenido">    
                    <h1 class="" id="">{peliculas.title.es}</h1>
                    <h5 class="" id="">{peliculas.description.es}</h5>
                    <h6 class="" id="">{peliculas.director} | {peliculas.producer} | {peliculas.release_date} </h6>
                </div>
            </div>
        </div>
    )}
export default Peliculas