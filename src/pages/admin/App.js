import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../../App.css";

import SidebarAdmin from "../../components/SidebarAdmin";
import LibraryLogs from "./LibraryLog";
import SearchBooks from "./../user/SearchBooks";
import AddUser from "./AddUser";
import IssueBook from "./IssueBook";

function AdminApp () {
  return (
    <div className="min-h-screen flex">
      <Router>
        <SidebarAdmin></SidebarAdmin>

        <Routes>
          <Route path="/" element={<LibraryLogs />} />
          <Route path="/search-books" element={<SearchBooks />} />
          <Route path="/create-accounts" element={<AddUser />} />
          <Route path="/books-issued" element={<IssueBook />} />
        </Routes>
      </Router>
    </div>
  )
}

export default AdminApp