import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SidebarUser from "../../components/SidebarUser";
import HomeUser from "./HomeUser";
import SearchBooks from "./SearchBooksUser";
import FAQ from "./FAQ";
import Setting from "./Setting";

function User() {
  return (
    <div className="min-h-screen flex">
      <SidebarUser />
      <Routes>
        <Route path="/home-user" element={<HomeUser />} />
        <Route path="/search-books" element={<SearchBooks />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default User;