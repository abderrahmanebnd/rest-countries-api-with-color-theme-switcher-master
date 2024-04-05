import { getCountries } from "../services/CountriesApi";
import Country from "./Country";
import SearchFilter from "./SearchFilter";
import { useLoaderData, useNavigation } from "react-router-dom";

function Main() {
  const countries = useLoaderData();

  return (
    <main className="bg-veryDarkBlue flex-1 px-6 py-8 ">
      <section className="container m-auto">
        <SearchFilter />
        <div className="my-14 flex flex-col gap-10 items-center lg:flex-row lg:gap-14 lg:flex-wrap ">
          {countries.map((country) => (
            <Country data={country} key={country.name.common} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;

export async function loader() {
  const countries = await getCountries();
  return countries;
}
