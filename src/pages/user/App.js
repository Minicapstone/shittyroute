import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../../App.css";

import SidebarUser from "../../components/SidebarUser";
import { UserDashboard } from "./UserDashboard";
import SearchBooks from "./SearchBooks";
import FAQ from "./FAQ";
import Setting from "./Setting";

function UserApp() {
  return (
    <div className="min-h-screen flex">
      <Router>
        <SidebarUser></SidebarUser>

        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/search-books" element={<SearchBooks />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default UserApp;
