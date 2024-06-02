import React from "react";
import Navbar from "../../admin/src/components/Navbar/Navbar.jsx";
import Sidebar from "../../admin/src/components/Sidebar/Sidebar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
