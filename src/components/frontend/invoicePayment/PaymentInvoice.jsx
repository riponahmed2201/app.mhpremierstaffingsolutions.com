import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtTokenDecode } from "../../../utils/jwtDecode";
import { token } from "../../../utils/authentication";
import axios from "axios";
import _ from "lodash";
import moment from "moment";
import Loader from "../../loadar/Loader";

function PaymentInvoice() {
  const jwtDecode = jwtTokenDecode();

  const [getInvoice, setInvoice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();

  const fetchInvoiceList = useCallback(async () => {
    setLoading(true);

    if (jwtDecode?._id) {
      try {
        const responseData = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/invoices?clientId=${jwtDecode?._id}`,
          {
            headers: {
              Authorization: `Bearer ${token()}`,
            },
          }
        );

        if (responseData && responseData?.data.statusCode === 200) {
          setInvoice(responseData?.data);
          setLoading(false);
        } else if (responseData && responseData?.data.statusCode === 400) {
          setError(responseData.errors);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(true);
        console.log(error);
      }
    }
  }, [jwtDecode?._id]);

  useEffect(() => {
    fetchInvoiceList();
  }, [jwtDecode?._id]);

  console.log("getInvoice: ", getInvoice);

  return (
    <div>
      {/* Inner Dashboard Search Part Start */}
      <section className="InnnerDashboardSearch">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="innerDashSearchItems d-flex align-items-center">
                <Link to="/client-dashboard">
                  <button className="innerdashboardBackButton">
                    <img
                      src="assets/frontend/images/InvoiceAndPayment/arrow.png"
                      className="img-fluid"
                      alt="arrow"
                    />
                  </button>
                </Link>
                <img
                  src="assets/frontend/images/InvoiceAndPayment/moneyLogo.png"
                  className="img-fluid"
                  alt="arrow"
                />
                <span className="innerDashSearchItemsSpan">
                  Invoice &amp; Payment
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <div class="innerDashboardRightSideFormWrapper d-flex align-items-center">
                  <div class="InnerDashSearchCion">
                      <img src="images/InnerDashboard/SearchIcon.png"  alt="arrow" />
                  </div>
                  <input type="text" class="form-control innerDashRightSideSearchBar" placeholder="search here"
                      aria-label="First name" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Inner Dashboard Search Part End */}
      {/* Invoice and Payment Table Start */}
      <section className="InvoicePaymentTable">
        <div className="container">
          <div className="row">
            <table className="table">
              <thead className="InvoiceAndPaymentTableHead">
                <tr>
                  <th scope="col">Week</th>
                  <th scope="col">Total Employee</th>
                  <th scope="col">Total Hours</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Invoice Number</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              {loading ? (
                <Loader />
              ) : getInvoice?.invoices?.length ? (
                _.map(getInvoice?.invoices, (item, index) => (
                  <tbody className="InvoiceAndPaymentTableBody">
                    <tr key={index} className="InvoiceTableItemsWhite">
                      <th scope="row" className="InvoiceTableHeadingGreenColor">
                        <div className="weekDateWrapper">
                          <span>
                            {moment(item?.fromWeekDate).format(
                              "ddd, D MMM, YY"
                            )}
                          </span>
                          <span> - </span>
                          <span>
                            {moment(item?.toWeekDate).format("ddd, D MMM, YY")}
                          </span>
                        </div>
                      </th>
                      <td>{item?.totalEmployee}</td>
                      <td>
                        {moment
                          .duration(
                            moment(item?.toWeekDate).diff(
                              moment(item?.fromWeekDate)
                            )
                          )
                          .asHours()}
                      </td>
                      <td>£{item?.amount}</td>
                      <td>{item?.invoiceNumber}</td>
                      <td className="InvoicePaidColor">{item?.status}</td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <div className="text-center text-danger">No Data Found!</div>
              )}
            </table>
          </div>
        </div>
      </section>
      {/* Invoice and Payment Table End */}
    </div>
  );
}

export default PaymentInvoice;
