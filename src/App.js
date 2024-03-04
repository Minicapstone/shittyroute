import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import LogIn, { exportedFunctions }from "./components/LogIn";

// USER PAGES
import SidebarUser from "./components/SidebarUser";
import HomeUser from "./pages/user/HomeUser";
import SearchBooksUser from "./pages/user/SearchBooksUser";
import FAQ from "./pages/user/FAQ";
import Setting from "./pages/user/Setting";

// ADMIN PAGES
import SidebarAdmin from "./components/SidebarAdmin";
import HomeAdmin from "./pages/admin/HomeAdmin";
import SearchBooksAdmin from "./pages/admin/SearchBooksAdmin";
import AddUser from "./pages/admin/AddUser";
import IssueBookAdmin from "./pages/admin/IssueBookAdmin";

// SUPER ADMIN PAGES
import SidebarSuperAdmin from "./components/SidebarSuperAdmin";
import HomeSuperAdmin from "./pages/superadmin/HomeSuperAdmin";
import BooksList from "./pages/superadmin/BooksList";
import ManageUser from "./pages/superadmin/ManageUser";
import IssueBookSuperAdmin from "./pages/superadmin/IssueBookSuperAdmin";

function App() {
  const userRole = "user"; 

  let sidebarComponent, routesComponent;

  // Determine which sidebar and routes components to use based on the user's role
  if (userRole === "user") {
    sidebarComponent = <SidebarUser />;
    routesComponent = (
      <Routes>
        <Route path="/home-user" element={<HomeUser />} />
        <Route path="/search-books" element={<SearchBooksUser />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    );
  } else if (userRole === "admin") {
    sidebarComponent = <SidebarAdmin />;
    routesComponent = (
      <Routes>
        <Route path="/home-admin" element={<HomeAdmin />} />
        <Route path="/search-books" element={<SearchBooksAdmin />} />
        <Route path="/create-accounts" element={<AddUser />} />
        <Route path="/books-issued" element={<IssueBookAdmin />} />
      </Routes>
    );
  } else if (userRole === "super-admin") {
    sidebarComponent = <SidebarSuperAdmin />;
    routesComponent = (
      <Routes>
        <Route path="/home-super-admin" element={<HomeSuperAdmin />} />
        <Route path="/books-list" element={<BooksList />} />
        <Route path="/manage-users" element={<ManageUser />} />
        <Route path="/books-issued" element={<IssueBookSuperAdmin />} />
      </Routes>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>

      {/* Render the selected sidebar and routes components */}
      <div className="min-h-screen flex">
        {sidebarComponent}
        {routesComponent}
      </div>
    </Router>
  );
}

export default App;
