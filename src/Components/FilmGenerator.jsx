import { useEffect, useState } from "react";
import Search from "./Search";
import axios from "axios";
import MoviesContext from "../Contexts/MoviesContext";
import Movie from "./Movie";

export default function FilmGenerator() {
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
    const[movie, setMovie] = useState("")

    const newSearch = (string)=>{
        setSearch(string)
    }


    useEffect(()=>{
        if(search.length>2){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fc3a4abec0d381d55758736dfe19b862&language=en-US&query=${search}`)
            .then(res=>{
                setError("");
                
                setMovies(res.data.results)
               
            })
            .catch((error)=>{
                console.log(error);
                setError("Something went wrong with your search. No movie for you. Or try again. Definitely try again.")

            })
        } else{
    
            setMovies([])
        }
    }, [search])

    return(
        <section>
            <p>{error}</p>
            <MoviesContext.Provider value={[setMovies,movies,setMovie, movie]}>
                <Search search={search} newSearch={newSearch} />
                <Movie />
            </MoviesContext.Provider>    
        </section>
    )
}