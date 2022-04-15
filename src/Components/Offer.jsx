import { useContext } from "react";
import MoviesContext from "../Contexts/MoviesContext";

export default function Offer({movie}){
    
    const Arr =useContext(MoviesContext);
    const turnoff = Arr[0];
    const movieArr=Arr[1];
    const chosen = Arr[2];


    const choiseHandler=()=>{

        movieArr.forEach(obj=>{
            if(obj.id===movie.id){
                chosen(obj)
            }
        })
        turnoff([])
    }

    return(
        <div onClick={choiseHandler} className="offer">{movie.title} [{movie.release_date.slice(0,4)}]</div>
    )
}