import { useContext } from "react";
import MoviesContext from "../Contexts/MoviesContext";
import Offer from "./Offer";

export default function Offers(){
    
    const Arr =useContext(MoviesContext);
    const moviesArr=Arr[1]

    return(
        <div className={(moviesArr.length===0)?"noshow":"offers"}>
            {
                moviesArr.map((movie, i)=>{
                    if(i<8){
                        return(
                           <Offer key={i} movie={movie} />
                        )
                    }
                })
            }
        </div>
    )
} 