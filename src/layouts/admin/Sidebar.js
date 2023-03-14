import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Dashboard</div>
                    <NavLink className="nav-link" to="/admin/dashboard">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                        Dashboard
                    </NavLink>
                    <NavLink className="nav-link" to="/admin/profile">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                        Profile
                    </NavLink>
                    <NavLink className="nav-link" to="/admin/position">
                        <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                        Position
                    </NavLink>
                    <NavLink className="nav-link" to="/admin/skill">
                        <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                        Skill
                    </NavLink>
                    <NavLink className="nav-link" to="/admin/source">
                        <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                        Source
                    </NavLink>
                    <NavLink className="nav-link" to="/admin/employee-list">
                        <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                        Employee List
                    </NavLink>
                    <NavLink className="nav-link" to="/admin/client-list">
                        <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                        Client List
                    </NavLink>
                    <NavLink className="nav-link" to="/admin/add-mh-employee">
                        <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                        Add MH Employee
                    </NavLink>
                    <div className="sb-sidenav-menu-heading">Interface</div>
                    <NavLink className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
                        Layouts
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                    </NavLink>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <NavLink className="nav-link" to="layout-static.html">Static Navigation</NavLink>
                            <NavLink className="nav-link" to="layout-sidenav-light.html">Light Sidenav</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Super Admin
            </div>
        </nav>

    )
}

export default Sidebar