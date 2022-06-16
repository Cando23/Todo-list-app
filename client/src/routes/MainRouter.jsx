import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "../pages/Tasks";
import NewTask from "../pages/NewTask";
import EditTask from "../pages/EditTask";
import NotFound from "../Error/404/404";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { useSelector } from "react-redux";
export default function MainRouter() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/tasks/new" element={<NewTask />}></Route>
          <Route path="/tasks/:id/edit" element={<EditTask />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}
