import React from "react";
import Navbar from "../../admin/src/components/Navbar/Navbar.jsx";
import Sidebar from "../../admin/src/components/Sidebar/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Add from "../../admin/src/pages/Add/Add.jsx";
import List from "../../admin/src/pages/List/List.jsx";
import Order from "../../admin/src/pages/Orders/Order.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = "http://localhost:4000";
  return (
    <div>
      {/* for  displaying toast notifications, */}
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
