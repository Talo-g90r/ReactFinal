import React, { useEffect, useState } from "react";
import Peliculas from "./Peliculas";


const ListaPeliculas = ()  => {
        const URL = 'https://ghibli-api-v1.azurewebsites.net/api/v1/movies';
        const [item, setData] = useState([]);       //estado

        useEffect( () => {
            fetch(URL)
                .then( (response) => response.json() )
                .then( (data) => setData(data.movies) )
                .catch( (error) => console.log(error) );
        }, []);

    return (
        <div>
            <h3 key={item.id}>{item.title}</h3>
            {item.length > 0
            ? item.map(pelis => 
                <Peliculas key={pelis.id} peliculas={pelis}/>)
            : <h3>cargando</h3>}

        </div>
    )

}

export default ListaPeliculas