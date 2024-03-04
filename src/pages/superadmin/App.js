import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SidebarSuperAdmin from "../../components/SidebarSuperAdmin";
import

function SuperAdminApp() {
  return (
    <div className="min-h-screen flex">
      <Router>
        <SidebarSuperAdmin />
        <Routes>
          <Route path="/" element={<SuperAdminDashboard />} />
          <Route path="/books-list" element={<BooksList />} />
          <Route path="/manage-users" element={<ManageUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default SuperAdminApp;
