import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuth, component: Component }) => {
  return <>{isAuth ? <Component /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
