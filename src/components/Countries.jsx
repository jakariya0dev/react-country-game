import React from "react";
import { Link } from "react-router-dom";



function Countries({setPage, setCountry, allCountry}) {


    
    function handleOnclick(country) {
        setPage('country-page')
        setCountry(country);
    }
    
    return(
        <div id="countries">

           <div className="btn-back">
                <button onClick={() => setPage('home-page')}>Back Home</button>
           </div>

            <div className="country-wrapper">
            
                {
                    allCountry.map(country => (
        
                        <div onClick={() => handleOnclick(country)} className="country-card" key={country.name.common}>
                            <img src={country.flags.png} alt="Country flag" />
                            <h3>{country.name.common}</h3>
                        </div>

                    ))
                }
                
            </div>

            
        </div>
    );

}

export default Countries;