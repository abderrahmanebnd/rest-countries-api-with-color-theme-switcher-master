import { MdOutlineDarkMode } from "react-icons/md";
function Header() {
  return (
    <header className="bg-darkBlue flex  justify-between h-14  items-center text-white px-6 ">
      <div className="font-bold ">Where is the world?</div>
      <button className="flex items-center gap-2 ">
        <MdOutlineDarkMode />
        <span>Dark Mode</span>
      </button>
    </header>
  );
}

export default Header;
