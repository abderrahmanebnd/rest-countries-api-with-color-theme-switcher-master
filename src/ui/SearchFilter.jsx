import { MdOutlineSearch } from "react-icons/md";
import OptionSelect from "./OptionSelect";
import { useCountry } from "../Context/CountryContext";

function SearchFilter() {
  const { region, handleChangeRegion, query, setQuery } = useCountry();
  return (
    <div className="flex justify-between flex-col gap-5 lg:flex-row ">
      <div className="relative">
        <MdOutlineSearch className="text-2xl absolute dark:text-white text-lightModeText top-1/2 left-6 -translate-y-1/2  " />

        <input
          className="dark:bg-darkBlue py-4 pl-20 w-full lg:w-96  rounded-md shadow-lg outline-none dark:placeholder:text-white dark:text-white text-lightModeInput"
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
          className=" dark:bg-darkBlue dark:text-white dark:border-none py-4 px-5 rounded-md shadow-lg border border-slate-200"
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
