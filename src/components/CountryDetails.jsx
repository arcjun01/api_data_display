export default function CountryDetails({ region, capital, population }) {
  return (
    <div className="country-details">
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Capital:</strong> {capital || "N/A"}</p>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
    </div>
  );
}
