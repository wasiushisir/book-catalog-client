import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllBook from "../pages/AllBook";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AddNewBook from "../pages/AddNewBook";
import Wishlist from "../pages/Wishlist";
import ListofBooks from "../pages/ListofBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allBook",
        element: <AllBook />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/bookList",
        element: <ListofBooks />,
      },
      {
        path: "/addNewBook",
        element: <AddNewBook />,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
      },
    ],
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
