import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { jwtTokenDecode } from '../../utils/jwtDecode';

function ClientSidebar() {

    const navigate = useNavigate();

    const jwt_decode = jwtTokenDecode();

    if (!jwt_decode?.client) {
        navigate("/")
    }

    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Dashboard</div>
                    <NavLink className="nav-link" to="/client/dashboard">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                        Dashboard
                    </NavLink>
                    <NavLink className="nav-link" to="/client/employee-list">
                        <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                        Employee List
                    </NavLink>
                    <NavLink className="nav-link" to="/client/employee-history">
                        <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                        Employee History
                    </NavLink>
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Super Admin
            </div>
        </nav>

    )
}

export default ClientSidebar