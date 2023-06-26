import React from "react";
import { NavLink } from "react-router-dom";
import { jwtTokenDecode } from "../../utils/jwtDecode";

function Sidebar() {
  const jwt_decode = jwtTokenDecode();

  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Dashboard</div>
          <NavLink className="nav-link" to="/admin/dashboard">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt" />
            </div>
            Dashboard
          </NavLink>

          {jwt_decode?.menuPermission?.position && (
            <NavLink className="nav-link" to="/admin/position">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Position
            </NavLink>
          )}

          {jwt_decode?.menuPermission?.skill && (
            <NavLink className="nav-link" to="/admin/skill">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Skill
            </NavLink>
          )}

          {jwt_decode?.menuPermission?.source && (
            <NavLink className="nav-link" to="/admin/source">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Source
            </NavLink>
          )}

          {jwt_decode?.menuPermission?.employeeList && (
            <NavLink className="nav-link" to="/admin/employee-list">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Employee List
            </NavLink>
          )}

          {jwt_decode?.menuPermission?.clientList && (
            <NavLink className="nav-link" to="/admin/client-list">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Client List
            </NavLink>
          )}

          {jwt_decode?.menuPermission?.clientList && (
            <NavLink className="nav-link" to="/admin/create-meet">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Create Meet
            </NavLink>
          )}

          {jwt_decode?.menuPermission?.clientList && (
            <NavLink className="nav-link" to="/admin/get-meets">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              View Meets
            </NavLink>
          )}

          {jwt_decode?.menuPermission?.addMhEmployee &&
            jwt_decode?.superAdmin && (
              <NavLink className="nav-link" to="/admin/add-mh-employee">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-table" />
                </div>
                Add MH Employee
              </NavLink>
            )}
          {jwt_decode?.menuPermission?.mhEmployeeList &&
            jwt_decode?.superAdmin && (
              <NavLink className="nav-link" to="/admin/mh-employee-list">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-table" />
                </div>
                MH Employee List
              </NavLink>
            )}

          {jwt_decode?.menuPermission?.invoiceList && (
            <NavLink className="nav-link" to="/admin/invoice-list">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Invoice List
            </NavLink>
          )}

          {jwt_decode?.menuPermission?.notificationList && (
            <NavLink className="nav-link" to="/admin/notification-list">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Notification List
            </NavLink>
          )}

          {jwt_decode?.menuPermission?.contactList && (
            <NavLink className="nav-link" to="/admin/contact-list">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Contact List
            </NavLink>
          )}
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        {jwt_decode?.name}
      </div>
    </nav>
  );
}

export default Sidebar;
