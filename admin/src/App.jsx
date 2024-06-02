import React from "react";
import Navbar from "../../admin/src/components/Navbar/Navbar.jsx";
import Sidebar from "../../admin/src/components/Sidebar/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Add from "../../admin/src/pages/Add/Add.jsx";
import List from "../../admin/src/pages/List/List.jsx";
import Order from "../../admin/src/pages/Orders/Order.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
