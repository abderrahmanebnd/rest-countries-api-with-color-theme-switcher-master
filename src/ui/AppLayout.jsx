import { useCountry } from "../Context/CountryContext";
import Header from "./Header";
import { Outlet,useNavigation } from "react-router-dom";
function AppLayout() {
  const {dark} = useCountry();
  let state = useNavigation().state;
  return (
    <div className={`flex flex-col min-h-screen ${dark ? "dark" : ""}`}>
      <Header />
      {
        state === "loading" ? <p className="text-3xl mt-10 text-center">Searching...</p> :
        <Outlet />
      }
    </div>
  );
}

export default AppLayout;
