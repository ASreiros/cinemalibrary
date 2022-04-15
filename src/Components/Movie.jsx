import { useContext } from "react";
import MoviesContext from "../Contexts/MoviesContext";
import star from "../img/star.svg"

export default function Movie() {

    const Arr =useContext(MoviesContext);
    const movie = Arr[3];
    

    if(typeof(movie) !=="string"){
        return(
            <div className="movie" >
                <h2>{movie.title}</h2>
                <div className="moviebody">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
                    <div>
                        <p>Release date: ({movie.release_date})</p>
                        <div className="reiting">
                            <p>{movie.vote_average}</p>
                            <img src={star} alt="star" />
                        </div>    
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
        )
    }
    
}