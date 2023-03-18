import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Dashboard</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body d-flex align-items-center justify-content-between">
              <strong>Total Position</strong>
              <strong>18</strong>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link className="small text-white stretched-link" to="/admin/position">View Details</Link>
              <div className="small text-white"><i className="fas fa-angle-right" /></div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning text-white mb-4">
            <div className="card-body d-flex align-items-center justify-content-between">
              <strong>Total Client</strong>
              <strong>10</strong>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link className="small text-white stretched-link" to="/admin/client-list">View Details</Link>
              <div className="small text-white"><i className="fas fa-angle-right" /></div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-success text-white mb-4">
            <div className="card-body d-flex align-items-center justify-content-between">
              <strong>Total MH Employee</strong>
              <strong>5</strong>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link className="small text-white stretched-link" to="/admin/mh-employee-list">View Details</Link>
              <div className="small text-white"><i className="fas fa-angle-right" /></div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-danger text-white mb-4">
            <div className="card-body d-flex align-items-center justify-content-between">
              <strong>Total Employee</strong>
              <strong>10</strong>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link className="small text-white stretched-link" to="/admin/employee-list">View Details</Link>
              <div className="small text-white"><i className="fas fa-angle-right" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard