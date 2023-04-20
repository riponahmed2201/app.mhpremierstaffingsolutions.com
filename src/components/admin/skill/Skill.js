import React, { useState, useEffect, useCallback } from 'react';

import { Button, Drawer, Form, Select, Input, Spin } from 'antd';
import axios from "axios";

import { responseNotification } from '../../../utils/notifcation';
import { addHandler, fetchHandler, updateSkillHandler } from '../../../api/skill';
import { token } from '../../../utils/authentication';


const { Option } = Select;

function Skill() {

  //get skills
  const [skills, setSkills] = useState([]);

  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();
  const [open, setOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [skillId, setSkillId] = useState();

  const [form] = Form.useForm();
  const [formEdit] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showEditDrawer = (id) => {
    setSkillId(id);
    setIsEditModalOpen(true);
  };

  const onCloseEdit = () => {
    setIsEditModalOpen(false);
  };

  const onFinish = (values) => {

    const name = values?.name;
    const active = values?.active === "YES" ? true : false;

    const addSkillFields = { name, active };

    if (name) {
      setLoading(true);
      addHandler(addSkillFields)
        .then((res) => res.json())
        .then((res) => {
          if (res?.statusCode === 201) {
            setError(undefined);
            setLoading(false);
            responseNotification("Skill created successfully!", "success");
            fetchSkills();
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

  //Edit skill Data
  const onFinishEdit = (values) => {

    const id = skillId;
    const name = values?.name;
    const active = values?.active === "YES" ? true : false;

    const receivedSkillFields = { id, name, active };

    if (id) {
      setLoading(true);
      updateSkillHandler(receivedSkillFields)
        .then((res) => res.json())
        .then((res) => {
          if (res?.statusCode === 200) {
            setError(undefined);
            setLoading(false);
            responseNotification("Skill updated successfully!", "success");
            fetchSkills();
            onCloseEdit();
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


  const fetchSkills = useCallback(async () => {
    setLoading(true);
    await fetchHandler().then((res) => {
      if (res?.status === 200) {
        setSkills(res?.data?.skills);
      } else {
        setLoading(false);
      }
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchSkills();
  }, []);


  const fetchSingleSkill = async () => {
    try {

      const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/skills/${skillId}`,
        {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        }
      );

      formEdit.setFieldsValue({
        name: res?.data?.details?.name,
        active: res?.data?.details?.active === true ? "YES" : "NO"
      });

    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchSingleSkill();
  }, [skillId]);


  return (
    <div className="container-fluid px-4">
      <div className='row mt-4'>
        <div className='d-flex justify-content-between'>
          <h3 className='mb-4 title'>Skill List</h3>
          <Button type="primary"  style={{ background: '#C6A34F', color: 'white' }} className='ml-5' onClick={showDrawer}>
            Add skill
          </Button>
        </div>
      </div>
      <div className='card sd'>
        {loading ? <div className='loader-bg text-center my-2 '> <Spin tip="Loading..." size="large" /> </div> : <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              skills?.map((data, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{data?.name}</td>
                  <td>{data?.active === true ? <span className="badge text-bg-success">YES</span> : <span className="badge text-bg-danger">NO</span>}</td>
                  <td>
                    <Button type="primary"  style={{ background: '#C6A34F', color: 'white' }} className='ml-5'
                      onClick={() => showEditDrawer(data?._id)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>}

        {/* Add skill Drawer */}
        <Drawer title="Add new skill" width={520} closable={false} onClose={onClose} open={open}>
          <div className="drawer-toggle-wrapper">
            <div className="drawer-toggle-inner-wrapper">
              <Form
                className="ant-form ant-form-vertical"
                layout="vertical"
                onFinish={onFinish}
                form={form}
              >
                <div className="col-lg-12">
                  <div className="single-field">
                    <Form.Item
                      label="Skill name"
                      name="name"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Please enter skill name',
                        },
                      ]}
                    >
                      <Input placeholder="Enter skill name" className="ant-input ant-input-lg" />
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
                      className="btn"
                      style={{ background: '#C6A34F', color: 'white' }}
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

        {/* Edit Drawer  */}
        <Drawer
          title="Edit skill"
          width={520}
          closable={false}
          onClose={onCloseEdit}
          open={isEditModalOpen}
        >

          <div className="drawer-toggle-wrapper">
            <div className="drawer-toggle-inner-wrapper">
              <Form
                className="ant-form ant-form-vertical"
                layout="vertical"
                onFinish={onFinishEdit}
                form={formEdit}
                initialValues={{ remember: true }}
              >
                <div className="col-lg-12">
                  <div className="single-field">
                    <Form.Item
                      label="Skill name"
                      name="name"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Please enter skill name',
                        },
                      ]}
                    >
                      <Input placeholder="Enter skill name" className="ant-input ant-input-lg" />
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
                      className="btn"
                      style={{ background: '#C6A34F', color: 'white' }}
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

export default Skill