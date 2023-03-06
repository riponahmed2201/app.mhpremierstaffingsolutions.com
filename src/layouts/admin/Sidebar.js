import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <Link className="nav-link" to="/admin/dashboard">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                        Dashboard
                    </Link>
                    <Link className="nav-link" to="/admin/profile">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                        Profile
                    </Link>
                    <Link className="nav-link" to="/admin/position">
                        <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                        Position
                    </Link>
                    <Link className="nav-link" to="/admin/skill">
                        <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                        Skill
                    </Link>
                    <Link className="nav-link" to="/admin/source">
                        <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                        Source
                    </Link>
                    <div className="sb-sidenav-menu-heading">Interface</div>
                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
                        Layouts
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                    </Link>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="layout-static.html">Static Navigation</Link>
                            <Link className="nav-link" to="layout-sidenav-light.html">Light Sidenav</Link>
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