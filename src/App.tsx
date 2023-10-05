import { lazy, Suspense } from "react";
import { Route, Router } from "react-router-dom";
import Layout from "./layout/Layout";
const Homepage = lazy((): React.FC => import("./pages/HomePage"));
const SpecificPage = lazy((): React.FC => import("./pages/SpecificPage"));
const Login = lazy((): React.FC => import("./pages/LogIn"));
const RegisterPage = lazy((): React.FC => import("./pages/Register"));
const NotFound = lazy((): React.FC => import("./pages/PageNotFound"));

function App() {8wju
  return (
    <div>
      <div>
        <h1 className="bg-red-600">hello </h1>
      </div>
    </div>
  );
}

export default App;
