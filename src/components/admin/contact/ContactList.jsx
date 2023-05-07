import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Table } from 'antd';

import _ from "lodash";

import { fetchContactListHandler } from '../../../api/contact';
import Loader from '../../loadar/Loader';
import { responseNotification } from '../../../utils/notifcation';
import { token } from '../../../utils/authentication';

const columns = [
  {
    title: '#',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Message',
    dataIndex: 'message',
  },
  {
    title: 'Feedback',
    dataIndex: 'feedback',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  }
];

function ContactList() {

  const [contacts, setContactList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    await fetchContactListHandler().then((res) => {
      if (res?.status === 200) {
        setContactList(res?.data?.contacts);
      } else {
        setLoading(false);
      }
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, []);

  const data1 = [];
  _.map(contacts, (item, index) => {
    data1.push({
      key: index + 1,
      name: item.name,
      email: item.email,
      message: item.message,
      feedback: item.active ? 'YES' : 'NO',
      status: (
        <>
          <Switch
            size="small"
            defaultChecked={item?.active === true}
            onChange={(e) => {
              onEmployeeStatusChange(item?._id, e);
            }}
          />
        </>
      ),
    });
  });

  const onEmployeeStatusChange = useCallback(async (value, e) => {
    const unicodeUri = `${process.env.REACT_APP_API_BASE_URL}`;
    const status = e === true ? true : false;
    const id = value;

    if (true) {
      await fetch(`${unicodeUri}/contacts/update-status`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          active: status,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res?.statusCode === 200) {
            responseNotification("Contact status updated successfully", "success");
            fetchContacts();
          } else if (res?.statusCode === 400) {
            responseNotification("Bad request", "danger");
          }
        });
    }
  },
    [fetchContacts]
  );

  return (
    <div className="container-fluid px-4">
      <div className='row mt-4'>
        <div className='d-flex justify-content-between'>
          <h3 className='mb-4 title'>Contact List</h3>
        </div>
      </div>
      <div className='card'>
        {loading ? (
          <Loader />
        ) : (
          <div className='m-2'> <Table columns={columns} dataSource={data1} /></div>)
        }
      </div>
    </div>
  )
}

export default ContactList