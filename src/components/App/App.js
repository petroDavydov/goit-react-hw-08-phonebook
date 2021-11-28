import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import LoaderTriangle from "../Loader";
import Container from "../Container";
import PrivateRoute from "../../Routes/PrivateRoute";
import PublicRoute from "../../Routes/PublicRoute";
import AppBar from "../Appbar";
import { fetchCurrentUser } from "../../redux/auth/authOperations";
import { getIsAuth } from "../../redux/auth/authSelectors";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const ContactPage = lazy(() => import("../../Pages/ContactPage/ContactPage"));
const LoginPage = lazy(() => import("../../Pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() =>
  import("../../Pages/RegisterPage/RegisterPage")
);

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<LoaderTriangle />}>
          <Routes>
            <Route path="/" element={<PublicRoute component={HomePage} />} />
            <Route
              path="/contacts"
              element={<PrivateRoute isAuth={isAuth} component={ContactPage} />}
            />
            <Route
              path="/login"
              element={<PublicRoute isAuth={isAuth} component={LoginPage} />}
            />
            <Route
              path="/register"
              element={<PublicRoute isAuth={isAuth} component={RegisterPage} />}
            />
          </Routes>
        </Suspense>
        <Footer />
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
