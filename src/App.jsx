import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Detail from "./ui/Detail";
import AppLayout from "./ui/AppLayout";
import Main, { loader as countriesLoader } from "./ui/Main";
import { CountryProvider } from "./Context/CountryContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Main />,
        loader: countriesLoader,
      },
      {
        path: "/:countryId",
        element: <Detail />,
      },
    ],
  },
]);
function App() {
  return (
    <CountryProvider>
      <RouterProvider router={router} />;
    </CountryProvider>
  );
}

export default App;
