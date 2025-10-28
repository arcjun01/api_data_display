import CountryName from "./CountryName"
import CountryDetails from "./CountryDetails"

export default function Item( {countryData} ) {
    return (
    <>
      {countryData.map((c, index) => (
        <div className="country-card" key={index}>
          <CountryName name={c.name.common} flag={c.flags?.png} />

          <CountryDetails
            capital={c.capital?.[0]}
            nativeName={c.name.nativeName}
            currencies={c.currencies}
            population={c.population}
            timeZones={c.timezones}
          />
        </div>
      ))}
    </>
    );
}