import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

function Skill() {

  const [skill, setSkill] = useState([]);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://44.204.212.181:8000/api/v1/skills`, { headers: { Authorization: `Bearer ${accessToken}` } });
      setSkill(response?.data?.skills);
    };

    fetchData();
  }, []);

  return (
    <div className='container-fluid px-4'>
      <h1 className='mt-3'>Skill</h1>
      <div className='card'>
        <div className='card-header'>
          <div className='row'>
            <div className='col-md-6'>
              <h5>Skill List</h5>
            </div>
            <div className='col-md-6'>
              <button className='float-end btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-plus-circle" aria-hidden="true"></i> Create Skill</button>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                skill?.map((data, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{data?.name}</td>
                    <td>{data?.slug}</td>
                    <td>{data?.active === true ? <span class="badge text-bg-success">YES</span> : <span class="badge text-bg-danger">NO</span>}</td>
                    <td>
                      <a title='Edit Skill' className='btn btn-info'>Edit</a>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      {/* modal here */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Create Skill</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" name="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  {/* <div className="form-text text-danger">Please enter skill name</div> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="active" className="form-label">Active</label>
                  <select name='active' className='form-select'>
                    <option value="">Please select status</option>
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                  {/* <div className="form-text text-danger">Please enter active status</div> */}
                </div>
                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skill