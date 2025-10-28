import CountryName from "./CountryName"
import CountryDetails from "./CountryDetails"

export default function Item( {country} ) {
    return (
        <div className="country-card">
            <CountryName name={country.name.common} flag={country.flags?.png} />
            <CountryDetails
                region={country.region}
                capital={country.capital?.[0]}
                population={country.population}
            />
        </div>
    );
}