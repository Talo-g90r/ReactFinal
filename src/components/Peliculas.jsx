//import { Link } from "react-router-dom";
import './Peliculas.css'
import { useState } from 'react';
import React from 'react';

const Peliculas =  ({ peliculas }) => {

    const [lang, setLang] = useState("")
    const cambio = (event) => {
    setLang(event.target.value);

    return lang
}
    return (              
        <div class="contenedor" key={peliculas.id}>
            <img class="fondo" src={peliculas.movie_banner} alt="Banner de la pelicula" />
            <div class="detalles">
                <div class="portada">
                    <img class="" id="peliculas-caratula" src={peliculas.image} alt="Caratula de la pelicula" />
                    <h3 class="" id="titulo">{peliculas.original_title}</h3> 
                    <form action="">
                        <select name="Idiomas" id="idiomas" size="1" onChange={cambio}>
                            <option value="es">Español</option>
                            <option value="jp">日本</option>
                            <option value="en">English</option>
                        </select>
                    </form>
                </div>
                <div class="contenido">    
                    <h1 class="" id="">{lang === 'es' ? 
                                        peliculas.title.es : 
                                            lang === 'jp' ? 
                                            peliculas.title.jp : 
                                            peliculas.title.en}</h1>
                    <h5 class="" id="">{lang === 'es' ? 
                                        peliculas.description.es : 
                                            lang === 'jp' ? 
                                            peliculas.description.jp : 
                                            peliculas.description.en}</h5>
                    <h6 class="" id="">{peliculas.director} | {peliculas.producer} | {peliculas.release_date} </h6>
                </div>
            </div>
        </div>
    )}
export default Peliculas