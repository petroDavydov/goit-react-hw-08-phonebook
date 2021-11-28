import { Navigate } from "react-router-dom";

const PublicRoute = ({ isAuth, component: Component }) => {
  return <>{isAuth ? <Navigate to="/contacts" /> : <Component />}</>;
};

export default PublicRoute;
