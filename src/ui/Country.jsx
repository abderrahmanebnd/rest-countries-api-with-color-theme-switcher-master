import { Link } from "react-router-dom";
import { formatNumber } from "../helpers/utils";

function Country({ data }) {
  return (
    <Link
      className="bg-darkBlue h-96 rounded-xl overflow-hidden w-80 shadow-lg cursor-pointer hover:-translate-y-3 transition-transform duration-300"
      to={data.cioc || data.cca2}
    >
      <img
        src={`${data.flags.svg}`}
        className="h-1/2 w-full object-cover"
        alt={`${data.flags.alt}`}
      />
      <div className="text-white px-10 py-7 space-y-2">
        <h3 className="text-2xl font-bold mb-3">{data.name.common}</h3>
        <div>
          <strong>Population: </strong>
          <span>{formatNumber(data.population)}</span>
        </div>
        <div>
          <strong>Region: </strong>
          <span>{data.region}</span>
        </div>
        <div>
          <strong>Capital: </strong>
          <span>{data.capital[0]}</span>
        </div>
      </div>
    </Link>
  );
}

export default Country;
