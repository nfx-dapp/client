import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layouts";
import HomePage from "./HomePage/HomePage";
import ErrorPage from "./ErrorPage/ErrorPage";
import AddNftPage from "./AddNftPage/AddNftPage";
import SearchPage from "./SearchPage/SearchPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout.Default />}>
      <Route index element={<HomePage />} />
      <Route path="/add-nft" element={<AddNftPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Route>
  )
);

export default router;
