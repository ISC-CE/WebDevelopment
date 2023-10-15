import AuthPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import AuthGuard from "./components/AuthGuard";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import { useRoutes, Navigate } from "react-router-dom";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <AuthGuard />,
      children: [
        { path: "login", element: <AuthPage /> },
        { path: "home", element: <UserList /> },
        { path: "register", element: <RegisterPage /> },
        { path: "/", element: <Navigate to="home" /> },
        { path: "/*", element: <Navigate to="home" />, caseSensitive: false }, // Catch-all route for other paths
      ],
    },
  ]);

  return (
    <>
      <div className="container-flex">
        <Navbar />
        <div className="container">
          <div className="mt-5">{routes}</div>
        </div>
      </div>
    </>
  );
}

export default App;
