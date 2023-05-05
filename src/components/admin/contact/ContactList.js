import React, { useState, useEffect, useCallback } from 'react';
import { Table } from 'antd';

import _ from "lodash";

import { fetchContactListHandler } from '../../../api/contact';
import Loader from '../../loadar/Loader';

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
      message: item.message
    });
  });

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