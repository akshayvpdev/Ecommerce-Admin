import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/Sidebar/SideBar";
import Header from "../Components/Header/Header";

export default function AdminConnection() {
  return (
    <div class="container-scroller">
      <Header />

      <div class="container-fluid page-body-wrapper">
        <SideBar />
        <div className="main-panel">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </div>
      </div>

      {/* <Footer /> */}

      <div className="control-sidebar-bg" />
    </div>
  );
}
