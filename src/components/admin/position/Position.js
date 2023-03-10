import React, { useState, useEffect, useCallback } from 'react';
import { responseNotification } from '../../../utils/notifcation';
import { addHandler, fetchHandler } from '../../../api/position';
import { Button, Drawer, Form, Select, Input, Spin } from 'antd';
import _ from "lodash";
import Loader from '../../loadar/Loader';

const { Option } = Select;
function Position() {

  //get positions
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();
  const params = new URLSearchParams(window.location.search);
  const [open, setOpen] = useState(false);
  let serialNumber = Number(params.get("page"));

  const [form] = Form.useForm();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {

    const name = values?.name;
    const active = values?.active === "YES" ? true : false;

    const addPositionFields = { name, active };

    if (name) {
      setLoading(true);
      addHandler(addPositionFields)
        .then((res) => res.json())
        .then((res) => {
          if (res?.statusCode === 201) {
            setError(undefined);
            setLoading(false);
            responseNotification("Position created successfully!", "success");
            // refetchPositions();
            fetchPositions();
            onClose();
            form.resetFields();
          } else if (res?.statusCode === 400) {
            setError(res?.errors?.[0].msg);
            setLoading(false);
          } else if (res?.statusCode === 500) {
            setError(res?.message);
            setLoading(false);
          }
        });
    }
  };

  const fetchPositions = useCallback(async () => {
    setLoading(true);
    await fetchHandler().then((res) => {
      if (res?.status === 200) {
        setPositions(res?.data?.positions);
      } else {
        setLoading(false);
      }
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <div className="container-fluid px-4">
      {/* <h1 className="mt-4">Dashboard</h1> */}
      {/* <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">Dashboard</li>
      </ol> */}
      <div className='row mt-4'>
        <div className='d-flex justify-content-between'>
          <h3 className='mb-4 title'>Position List</h3>
          <Button type="primary" className='ml-5' onClick={showDrawer}>
            Add position
          </Button>
        </div>
      </div>
      <div className='card sd'>
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
            {loading ? (
              <tr>
                <td>
                  <Loader />
                </td>
              </tr>
            ) : positions.length ? (
              _.map(positions, (item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.slug}</td>
                  <td>{item?.active === true ? <span className="badge text-bg-success">YES</span> : <span className="badge text-bg-danger">NO</span>}</td>
                  <td>
                    <a title='Edit Position' className='btn btn-info btn-sm'>Edit</a>
                  </td>
                </tr>
              )))
              : (
                <tr>
                  <td colSpan={5} className='text-center text-danger'>No Data Found!</td>
                </tr>
              )}
          </tbody>
        </table>

        <Drawer title="Add new position" width={520} closable={false} onClose={onClose} open={open}>
          <div className="drawer-toggle-wrapper">
            <div className="drawer-toggle-inner-wrapper">
              <Form
                className="ant-form ant-form-vertical"
                layout="vertical"
                onFinish={onFinish}
              >
                <div className="col-lg-12">
                  <div className="single-field">
                    <Form.Item
                      label="Position name"
                      name="name"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Please enter position name',
                        },
                      ]}
                    >
                      <Input placeholder="Enter position name" className="ant-input ant-input-lg" />
                    </Form.Item>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="single-field1">
                    <Form.Item
                      label="Active"
                      name="active"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "status is required",
                        },
                      ]}
                    >
                      <Select
                        showSearch={true}
                        placeholder="Please Select Active Yes or No"
                        optionFilterProp="children"
                      >
                        <Option value="YES">YES</Option>
                        <Option value="NO">NO</Option>
                      </Select>
                    </Form.Item>
                  </div>
                </div>

                {getError ? (
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="error-message">
                        <p className="error-text-color">{getError}</p>
                      </div>
                    </div>
                  </div>
                ) : undefined}

                <div className="col-lg-12">
                  <Form.Item>
                    <button
                      disabled={loading}
                      className="btn btn-primary"
                      type="submit"
                    >
                      {!loading && "Save"}
                      {loading && (
                        <span
                          className="indicator-progress"
                          style={{ display: "block" }}
                        >
                          Please wait...{" "}
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      )}
                    </button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default Position