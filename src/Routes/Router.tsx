import React from "react";

import { MainLayout } from "@/Components";
import { Detail, Home, NotFoundError } from "@/Pages";

import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:issue_number" element={<Detail />} />
      </Route>
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
};

export default Router;
