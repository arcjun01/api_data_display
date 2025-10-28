export default function CountryName({ name, flag }) {
  return (
    <div className="country-name">
      <img src={flag} alt={`${name} flag`} className="flag" />
      <h2>{name}</h2>
    </div>
  );
}
