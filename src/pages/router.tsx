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
import ProjectsPage from "./ProjectsPage/ProjectsPage";
import ContractPage from "./ContractPage/ContractPage";
import { ProjectPage } from "./ProjectPage/ProjectPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout.Default />}>
      <Route index element={<HomePage />} />
      <Route path="/add-nft" element={<AddNftPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contracts/:address" element={<ContractPage />} />
      <Route path="/project/:id" element={<ProjectPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export default router;
