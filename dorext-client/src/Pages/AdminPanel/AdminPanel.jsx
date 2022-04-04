import React from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import AddNewTour from "../../Components/AddNewTour/AddNewTour";
import AllOrders from "../../Components/AllOrders/AllOrders";
import "./AdminPanel.css";

const AdminPanel = () => {
  const activeStyle = {
    backgroundColor: "#fff",
    color: "#fc5b62",
  };

  return (
    <section className="admin-panel">
      {/* -------------------------------------------------------------------------- */
      /*                              SIDE ADMIN PANEL                              */
      /* -------------------------------------------------------------------------- */}
      <aside>
        <h2 className="mb-4">
          <i className="fas fa-user-lock me-3"></i>
        </h2>

        <NavLink
          activeStyle={activeStyle}
          className="link"
          to="/admin/admin_panel/manage_all_services"
        >
          <i className="fas fa-cogs me-2"></i> Manage All Orders
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          className="link"
          to="/admin/admin_panel/add_new_services"
        >
          <i className="fas fa-folder-plus me-2"></i> Add New Tour
        </NavLink>
      </aside>

      {/* -------------------------------------------------------------------------- */
      /*                             ADMIN PANEL CONTENT                            */
      /* -------------------------------------------------------------------------- */}
      <main className="content">
        <Route exact path="/admin">
          <AllOrders></AllOrders>
        </Route>
        <Route exact path="/admin/admin_panel/manage_all_services">
          <AllOrders></AllOrders>
        </Route>
        <Route exact path="/admin/admin_panel/add_new_services">
          <AddNewTour></AddNewTour>
        </Route>
      </main>
    </section>
  );
};

export default AdminPanel;
