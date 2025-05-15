import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BerandaPage from "./pages/BerandaPage";
import PrivateRoute from "./routes/PrivateRoute";
import UserList from "./pages/UserList";
import MainPage from "./pages/MainPage";
import { PaginationProvider } from "./context/PaginationContext";

function App() {
  const [count, setCount] = useState(0);

  const token = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/mini-project"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          >
            <Route path="beranda" element={<BerandaPage />} />

            <Route
              path="user-list"
              element={
                <PaginationProvider>
                  <UserList />
                </PaginationProvider>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
