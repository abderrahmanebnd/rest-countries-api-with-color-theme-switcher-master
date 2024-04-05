import Header from "./Header";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
