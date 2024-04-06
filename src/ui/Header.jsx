import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCountry } from "../Context/CountryContext";
function Header() {
  const {setDark,dark} = useCountry();
  return (
    <header className="dark:bg-darkBlue dark:text-white flex justify-between h-14 items-center px-6 text-veryDarkBlue shadow-md  ">
      <Link to="/" className="font-bold ">Where is the world?</Link>
      <button className="flex items-center gap-2" onClick={()=>setDark(d=>!d)}>
         {dark ?  
      <MdOutlineWbSunny />
      :<MdOutlineDarkMode/> }
        <span className="font-semibold">{dark ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </header>
  );
}

export default Header;
