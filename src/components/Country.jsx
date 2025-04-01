

function Country({country, setPage}) {


    
    return (
        <section id="country">

            <div className="btn-group">
                    <button onClick={() => setPage('home-page')}>Back Homepage</button>
                    <button onClick={() => setPage('countries-page')}>Back to Countries</button>
            </div>
            
            <div className="country-details-wrapper">

                

                <div className="country-details-col">
                    <h3 className="of-name">{country.name?.official}</h3>
                    <h2 className="name">{country.name.common}</h2> <br/>
                    <p>{country.flags.alt}</p>
                    <br />
                    
                    <h4 className="cp-name">{country.capital}</h4>
                    <p>Capital</p>
                </div>

                <div className="country-details-col">
                    <h5>FLAG: </h5>
                    <img src={country.flags.png} alt=""/> <br/> <br/>

                    <table className="country-details-table">
                        
                        <tbody>
                            <tr>
                                <th>Independent:</th>
                                <td>{country.independent ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <th>UN Member:</th>
                                <td>{country.unMember ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <th>Currencies:</th>
                                <td>{country.currencies[`${Object.keys(country.currencies)[0]}`].name} ({Object.keys(country.currencies)[0]}/{country.currencies[`${Object.keys(country.currencies)[0]}`].symbol})</td>
                            </tr>
                            <tr>
                                <th>Fifa Member:</th>
                                <td>Yse</td>
                            </tr>
                            <tr>
                                <th>Population:</th>
                                <td>{country.population}</td>
                            </tr>
                            <tr>
                                <th>Domain (tld):</th>
                                <td>{country.tld}</td>
                            </tr>

                            <tr>
                                <th>Week Start on:</th>
                                <td>{country.startOfWeek}</td>
                            </tr>
                        </tbody>
                        
                    </table>
                    
                </div>
                <div className="country-details-col">

                    <table className="country-details-table">

                        <tbody>
                            <tr>
                                <th>Car Side: </th>
                                <td>{country.car.side}</td>
                            </tr>

                            <tr>
                                <th>Area</th>
                                <td>{country.area}</td>
                            </tr>

                            <tr>
                                <th>Timezones: </th>
                                <td>{country.timezones.join(', ')}</td>
                            </tr>

                            <tr>
                                <th>Languages</th>
                                <td>{country.languages[Object.keys(country.languages)[0]]}</td>
                            </tr>

                            <tr>
                                <th>Continents: </th>
                                <td>{country.continents.join(', ')}</td>
                            </tr>

                            <tr>
                                <th>Region: </th>
                                <td>{country.sub} {country.region}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <br />
                    
                    
                    
                    <center>
                        <p><b>Coat Of Arms:</b></p>
                        <img 
                            className="coatOfArms" 
                            src="https://mainfacts.com/media/images/coats_of_arms/no.png" alt="" />
                    </center>
                </div>
            </div>

            
        </section>
    )
}

export default Country;