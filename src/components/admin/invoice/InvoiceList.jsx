import React, { useState, useEffect, useCallback } from "react";
import { Button, Switch, Table } from "antd";

import _ from "lodash";
import moment from "moment";

import Loader from "../../loadar/Loader";
import { responseNotification } from "../../../utils/notifcation";
import { token } from "../../../utils/authentication";
import { fetchInvoiceListHandler } from "../../../api/invoice";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "#",
    dataIndex: "key",
  },
  {
    title: "From Week",
    dataIndex: "fromWeekDate",
    sorter: (a, b) => a.fromWeekDate.length - b.fromWeekDate.length,
  },
  {
    title: "To Week",
    dataIndex: "toWeekDate",
  },
  {
    title: "Total Employee",
    dataIndex: "totalEmployee",
  },
  {
    title: "Total Hours",
    dataIndex: "totalHours",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Invoice Number",
    dataIndex: "invoiceNumber",
  },
  {
    title: "Payment Status",
    dataIndex: "paymentStatus",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

function InvoiceList() {
  const [getInvoice, setInvoiceList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInvoices = useCallback(async () => {
    setLoading(true);
    await fetchInvoiceListHandler().then((res) => {
      if (res?.status === 200) {
        setInvoiceList(res?.data?.invoices);
      } else {
        setLoading(false);
      }
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const data1 = [];
  _.map(getInvoice, (item, index) => {
    data1.push({
      key: index + 1,
      fromWeekDate: moment(item?.fromWeekDate).format("ddd, D MMM, YY"),
      toWeekDate: moment(item?.toWeekDate).format("ddd, D MMM, YY"),
      totalEmployee: item?.totalEmployee,
      totalHours: moment
        .duration(moment(item?.toWeekDate).diff(moment(item?.fromWeekDate)))
        .asHours(),
      amount: item?.amount,
      invoiceNumber: item?.invoiceNumber,
      paymentStatus: item?.status,
      status: (
        <>
          <Switch
            size="small"
            defaultChecked={item?.status === "PAID"}
            onChange={(e) => {
              onInvoiceStatusChange(item?._id, e);
            }}
          />
        </>
      ),
    });
  });

  const onInvoiceStatusChange = useCallback(
    async (value, e) => {
      const unicodeUri = `${process.env.REACT_APP_API_BASE_URL}`;
      const status = e === true ? "PAID" : "DUE";
      const id = value;

      if (true) {
        await fetch(`${unicodeUri}/invoices/update-status`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token()}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            status: status,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res?.statusCode === 200) {
              responseNotification(
                "Invoice payment status updated successfully",
                "success"
              );
              fetchInvoices();
            } else if (res?.statusCode === 400) {
              responseNotification("Bad request", "danger");
            }
          });
      }
    },
    [fetchInvoices]
  );

  return (
    <div className="container-fluid px-4">
      <div className="row mt-4">
        <div className="d-flex justify-content-between">
          <h3 className="mb-4 title">Invoice List</h3>
          <Button
            type="primary"
            style={{ background: "#C6A34F", color: "white" }}
          >
            <Link to={`/admin/add-invoice`} className="text-decoration-none">
              Add Invoice
            </Link>
          </Button>
        </div>
      </div>
      <div className="card">
        {loading ? (
          <Loader />
        ) : (
          <div className="m-2">
            <Table columns={columns} dataSource={data1} />
          </div>
        )}
      </div>
    </div>
  );
}

export default InvoiceList;
