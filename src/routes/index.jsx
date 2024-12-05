import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import CreateUser from '../pages/create-user/CreateUser';
import Users from '../pages/users/Users';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create-user" element={<CreateUser />} />
      </Route>
    </Routes>
  );
}

export default Router