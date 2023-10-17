import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Recipes from "../pages/Recipes";
import SingleRecipe from "../pages/singleRecipe";
import PageNotFound from "../pages/PageNotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/single-recipe/:id" element={<SingleRecipe />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
