import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Detail, { loader as detailLoader } from "./ui/Detail";
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
        path: "/:code",
        element: <Detail />,
        loader: detailLoader,
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
