import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-darkBlue flex  justify-between h-14  items-center text-white px-6 ">
      <Link to="/" className="font-bold ">Where is the world?</Link>
      <button className="flex items-center gap-2 ">
        <MdOutlineDarkMode />
        <span>Dark Mode</span>
      </button>
    </header>
  );
}

export default Header;
