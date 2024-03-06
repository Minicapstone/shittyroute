import { Routes, Route} from "react-router-dom";

import SidebarSuperAdmin from "../../components/SidebarSuperAdmin";
import HomeSuperAdmin from "./HomeSuperAdmin";
import BooksList from "./BooksList"
import ManageUser from "./ManageUser"
import IssueBookSuperAdmin from "./IssueBookSuperAdmin";

function SuperAdmin() {
  return (
    <div className="min-h-screen flex">
      <SidebarSuperAdmin></SidebarSuperAdmin>
      <Routes>
        <Route path="/home-super-admin" element={<HomeSuperAdmin/>}/>
        <Route path="/books-list" element={<BooksList/>}/>
        <Route path="/manage-users" element={<ManageUser/>}/>
        <Route path="/books-issued" element={<IssueBookSuperAdmin/>}/>
      </Routes>
    </div>
  )
}

export default SuperAdmin