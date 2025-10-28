import {useState, useEffect} from "react";

function Results()
{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //UseEffect to get results and data from API
    useEffect(() => {
        async function fetchCountries(){
            //try to get data
            try
            {
                const apiResponse = await fetch("https://restcountries.com/v3.1/all?fields=capital,name,currencies,nativeName,population,timezones");

                if(!apiResponse.ok) //could not fetch api data
                {
                    throw new Error("Could not fetch data");
                }

                //otherwise everything went well
                const results = await apiResponse.json();
                setData(results); //store results
            }
            //catch error message if failed fetch
            catch(errorMessage)
            {
                setError(errorMessage.message)
            }
            //set loading to false since fetch has been tried and done
            finally
            {
                setLoading(false);
            }
        }

        //call fetch
        fetchCountries();
    }, []); //[] == dependencies but there are none so it will only run once

    return(
        <div>
            <h1>Countries:</h1>
            <p>{error}</p>
            <ul>
                {data.map((d, index)=> (
                    // <li key={index}>{d.nativeName}</li>
                    <li key={index}>{d.name.common}</li>  
                ))}
            </ul>
            
        </div>
    )
}

export default Results;