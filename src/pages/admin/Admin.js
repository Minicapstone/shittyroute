import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SidebarAdmin from "../../components/SidebarAdmin";
import HomeAdmin from "./HomeAdmin";
import SearchBooksAdmin from "./SearchBooksAdmin";
import AddUser from "./AddUser";
import IssueBookAdmin from "./IssueBookAdmin";

function Admin() {
  return (
    <div className="min-h-screen flex">
      <SidebarAdmin></SidebarAdmin>
      <Routes>
        <Route path="/home-admin" element={<HomeAdmin />} />
        <Route path="/search-books" element={<SearchBooksAdmin />} />
        <Route path="/create-accounts" element={<AddUser />} />
        <Route path="/books-issued" element={<IssueBookAdmin />} />
      </Routes>
    </div>
  );
}

export default Admin
