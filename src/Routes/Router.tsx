import React from "react";

import MainLayout from "@/Components/Layouts/MainLayout";
import Detail from "@/Pages/Detail";
import Home from "@/Pages/Home";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default Router;
