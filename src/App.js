import "./App.css";

import { Header } from "./components/header/Header";

import { LoginPage } from "./pages/LoginPage";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { Layout } from "./pages/Layout";
function App() {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  return (
    <>
      <Header isAuthorized={isAuthorized} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todos" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
