import React from "react"
import "./countries.css"
const ShowCountriesFlags = ({flags}) => {
    //console.log(flags)
    return(
        <div>
            <div className="countryCard">                
                <img src={flags.flags.png} alt={flags.flag}/>
                <p>{flags.name.common}</p>
            </div>
        </div>
    )
}
export default ShowCountriesFlags;