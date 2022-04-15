import Offers from "./Offers"

export default function Search({search, newSearch}) {

    const searchHandler = e=>{
        
       newSearch(e.target.value)
    }


    return(
        <div className="search-container">
            <div className="search-holder">
                <input type="text" onChange={searchHandler} placeholder="search here" value={search} />
                <Offers/>
            </div>
        </div>
    )
    
}