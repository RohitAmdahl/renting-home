import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
const Homepage = lazy(() => import("./pages/HomePage"));
const SpecificPage = lazy(() => import("./pages/SpecificPage"));
const Login = lazy(() => import("./pages/LogIn"));
const RegisterPage = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/detail/:id" element={<SpecificPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
