import { memo } from "react";
import { useCountry } from "../Context/CountryContext";
import { getCountries } from "../services/CountriesApi";
import Country from "./Country";
import SearchFilter from "./SearchFilter";
import { useLoaderData } from "react-router-dom";

const Main = memo(function Main() {
  const countries = useLoaderData();

  const { query, handleFilterCountries, handleSearchCountries } = useCountry();

  const filtredCountries = handleFilterCountries(countries);

  const searchedCountries = query
    ? handleSearchCountries(filtredCountries)
    : filtredCountries;

  return (
    <main className="dark:bg-veryDarkBlue flex-1 px-6 py-24 ">
      <section className="container m-auto">
        <SearchFilter />
        {searchedCountries.length > 0 ? (
          <div className="my-14 flex flex-col gap-10 items-center lg:flex-row lg:gap-14 lg:flex-wrap lg:justify-center ">
            {searchedCountries.map((country) => (
              <Country data={country} key={country.name.common} />
            ))}
          </div>
        ) : (
          <p className="text-2xl dark:text-white mt-10"> No country Found...</p>
        )}
      </section>
    </main>
  );
}
);
export default Main;

export async function loader() {
  const countries = await getCountries();
  return countries;
}
