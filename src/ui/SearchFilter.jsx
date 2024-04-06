import { MdOutlineSearch } from "react-icons/md";
import OptionSelect from "./OptionSelect";
import { useCountry } from "../Context/CountryContext";

function SearchFilter() {
  const { region, handleChangeRegion, query, setQuery } = useCountry();
  return (
    <div className="flex justify-between flex-col gap-5 lg:flex-row ">
      <div className="relative">
        <MdOutlineSearch className="text-2xl absolute text-white top-1/2 left-6 -translate-y-1/2  " />

        <input
          className="bg-darkBlue py-4 pl-20 w-full lg:w-96  rounded-md shadow-lg outline-none placeholder:text-white text-white "
          placeholder="Search For country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <select
          name="region"
          id="region"
          value={region}
          onChange={(e) => handleChangeRegion(e)}
          className="outline-none bg-darkBlue text-white py-4 px-5  rounded-md shadow-lg  "
        >
          {[
            "All",
            "Americas",
            "Africa",
            "Asia",
            "Europe",
            "Oceania",
          ].map((region) => (
            <OptionSelect key={region}>{region}</OptionSelect>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
