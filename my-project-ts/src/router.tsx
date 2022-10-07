//se der erro => const Router = () => {}
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home";
import Login from "pages/Login";
import Registration from "pages/Registration";

function Router() {
  return(
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.REGISTRATION} element={<Registration />} />
    </Routes>
  )
}

export default Router;
