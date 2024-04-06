import { MdOutlineArrowBack } from "react-icons/md";
import { getCountry } from "../services/CountriesApi";
import { Link, useLoaderData,useNavigate } from "react-router-dom";
import { formatNumber, getLanguages, getProperty } from "../helpers/utils";
function Detail() {
  const country = useLoaderData();
  const navigate = useNavigate();

  return <main className=" bg-veryDarkBlue p-8 ">
    
 <button onClick={()=>navigate(-1)} className="flex gap-3 w-32 bg-darkBlue p-2 px-4 text-white  rounded-md shadow-xl mb-10 text-xl" ><MdOutlineArrowBack/> Back</button>

    <section className="min-h-screen m-auto md:flex  max-w-6xl gap-10">
         
      <img src={`${country.flags.svg}`} alt={`${country.flags.alt}`} className="shadow-lg w-full rounded-md md:w-1/2 md:self-start mt-10"/>
      
      <div className="self-start grid grid-cols-2 items-center gap-4" >
        <div className="mt-8 mb-5">
          <h1 className="text-white text-3xl font-bold mb-4">{country.name.common}</h1>
          <ul className="text-white space-y-2">
            <li>
              <strong>
              Native Name:
              </strong>
              <span className="text-gray-400"> {getProperty(country.name.nativeName,"official")}</span>
              </li>

            <li>
              <strong>
              Population:
              </strong>
              <span className="text-gray-400"> {formatNumber(country.population)}</span>
              </li>
            <li>
              <strong>
              Region:
              </strong>
              <span className="text-gray-400"> {country.region}</span>
              </li>
            <li>
              <strong>
              Sub Region: 
              </strong>
              <span className="text-gray-400"> {country.subregion}</span>
              </li>
            <li>
              <strong>
              Capital: 
              </strong>
              <span className="text-gray-400"> {country.capital[0]}</span>
              </li>
              
          </ul>
        </div>
         <ul className="text-white space-y-2">
            <li>
              <strong>
              Top Level Domain:
              </strong>
              <span className="text-gray-400"> {country.tld[0]}</span>
              </li>

            <li>
              <strong>
              Curriencies:
              </strong>
              <span className="text-gray-400"> {getProperty(country.currencies)}</span>
              </li>
            <li>
              <strong>
              Languages:
              </strong>
              <span className="text-gray-400"> {getLanguages(country.languages).join(', ')}</span>
              </li>
          </ul>
          {
            country.borders.length === 0 ? <p className="text-xl text-white text-center">No borders Found...</p> :

            <ul className="gap-2 flex  ">
          {country.borders.map(border=>
            <li>
              <Link to={`/${border}`} className="bg-darkBlue px-3 py-1 rounded-md text-white shadow-md">{border}</Link>
              </li>
          )}
        </ul>
        }
      </div>
    </section>
  </main>
}

export default Detail;

export async function loader({ params }) {
  const country = await getCountry(params.code);
  return country;
}
