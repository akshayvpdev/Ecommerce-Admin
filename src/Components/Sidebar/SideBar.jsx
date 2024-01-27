import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="index.html" className="nav-link">
              <i className="mdi mdi-grid-large menu-icon" />
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
  <Link to="index.html" className="nav-link">
    <i className="mdi mdi-cart menu-icon" />
    <span className="menu-title">Products</span>
  </Link>
</li>
          <li className="nav-item">
            <Link to="index.html" className="nav-link">
              <i className="mdi mdi-package menu-icon" />
              <span className="menu-title">Orders</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="index.html" className="nav-link">
              <i className="mdi mdi-account menu-icon" />
              <span className="menu-title">Customers</span>
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link to="index.html" className="nav-link">
              <i className="mdi mdi-package-variant menu-icon" />
              <span className="menu-title">Inventory</span>
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link to="index.html" className="nav-link">
              <i className="mdi mdi-view-grid menu-icon" />
              <span className="menu-title">Categories</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="index.html" className="nav-link">
              <i className="mdi mdi-chart-bar menu-icon" />
              <span className="menu-title">Reports</span>
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
