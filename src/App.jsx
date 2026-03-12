import React from "react";
import Simple from "./Simple";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Register from "./Register";
import TaskManager from "./Tasks/TaskManager";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import AuthLayout from "./layouts/AuthLayout";
import AuthGuard from "./guards/AuthGuard";
import AppLayout from "./layouts/AppLayout";
export default function App() {
  const isLogged = localStorage.getItem("token") ? true : false;
  return (
    <div>
      <BrowserRouter>
        <h2>Header</h2>

        <Routes>
          <Route
            path="/"
            element={<Navigate to={isLogged ? "/tasks" : "/auth/login"} />}
          />
          <Route element={<AuthGuard />}>
            <Route element={<AppLayout />}>
              <Route path="/tasks" element={<TaskManager />} />
              <Route path="/simple/:name" element={<Simple />} />
            </Route>
          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="*" element={<h2>Page not found</h2>}></Route>
        </Routes>
        <h2>Footer</h2>
      </BrowserRouter>
    </div>
  );
}
