import { createContext, useContext, useState } from "react";

const CountryContext = createContext();

function CountryProvider({ children }) {
  const [region, setRegion] = useState("All");
  const [query, setQuery] = useState("");
  const [dark,setDark] = useState(false);

  function handleChangeRegion(e) {
    setRegion(e.target.value);
  }

  function handleSearchCountries(countries) {
    const searchedCountries = countries.filter((c) =>
      c.name.common.toLowerCase().includes(query.toLowerCase()),
    );
    return searchedCountries;
  }
  function handleFilterCountries(countries) {
    if (region === "All") return countries;
    const filtredCountries = countries.filter(
      (c) => c.region.toLowerCase() === region.toLowerCase(),
    );
    return filtredCountries;
  }

  const value = {
    region,
    query,
    setQuery,
    handleChangeRegion,
    handleFilterCountries,
    handleSearchCountries,
    dark,
    setDark
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}

function useCountry() {
  const context = useContext(CountryContext);
  if (context === undefined)
    throw new Error("CountryContext was used outside the CountrysProvider");
  return context;
}

export { useCountry, CountryProvider };
