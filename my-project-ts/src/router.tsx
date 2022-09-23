//se der erro => const Router = () => {}
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home";
import Login from "pages/Login";

function Router() {
  return(
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />}/>
      <Route path={RoutePath.LOGIN} element={<Login />}/>
    </Routes>
  )
}

export default Router;
