import React from "react";
import { Link } from "react-router-dom";

function PaymentInvoice() {
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
                      alt
                    />
                  </button>
                </Link>
                <img
                  src="assets/frontend/images/InvoiceAndPayment/moneyLogo.png"
                  className="img-fluid"
                  alt
                />
                <span className="innerDashSearchItemsSpan">
                  Invoice &amp; Payment
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <div class="innerDashboardRightSideFormWrapper d-flex align-items-center">
                  <div class="InnerDashSearchCion">
                      <img src="images/InnerDashboard/SearchIcon.png" alt="">
                  </div>
                  <input type="text" class="form-control innerDashRightSideSearchBar" placeholder="search here"
                      aria-label="First name">
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
                  <th scope="col">
                    <div />
                  </th>
                </tr>
              </thead>
              <tbody className="InvoiceAndPaymentTableBody">
                {/* Paid Table Start */}
                <tr className="InvoiceTableItemsWhite">
                  <th scope="row" className="InvoiceTableHeadingGreenColor">
                    <div className="weekDateWrapper">
                      <span>Sat, 2 Jan, 23</span>
                      <span>-</span>
                      <span>Mon, 8 Jan, 23</span>
                    </div>
                  </th>
                  <td>20</td>
                  <td>100</td>
                  <td>$500</td>
                  <td>
                    #10010
                    <div className="InvoicePdfWrpapper">
                      <a href>
                        <img
                          src="assets/frontend/images/InvoiceAndPayment/InvoicePdfDownloadButton.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </td>
                  <td className="InvoicePaidColor">Paid</td>
                  <td />
                </tr>
                {/* Paid Table End */}
                {/* Due Table Start */}
                <tr className="InvoiceTableItemsRed">
                  <th scope="row" className="InvoiceTableHeadingRedColor">
                    <div className="weekDateWrapper">
                      <span>Sat, 2 Jan, 23</span>
                      <span>-</span>
                      <span>Mon, 8 Jan, 23</span>
                    </div>
                  </th>
                  <td>20</td>
                  <td>100</td>
                  <td>$500</td>
                  <td>
                    #10010
                    <div className="InvoicePdfWrpapper">
                      <a href>
                        <img
                          src="assets/frontend/images/InvoiceAndPayment/InvoicePdfDownloadButton.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </td>
                  <td className="InvoiceDueColor">Due</td>
                  <td>
                    <button className="InvoicePayButton">Pay</button>
                  </td>
                </tr>
                {/* Due Table End */}
                {/* Paid Table Start */}
                <tr className="InvoiceTableItemsWhite">
                  <th scope="row" className="InvoiceTableHeadingGreenColor">
                    <div className="weekDateWrapper">
                      <span>Sat, 2 Jan, 23</span>
                      <span>-</span>
                      <span>Mon, 8 Jan, 23</span>
                    </div>
                  </th>
                  <td>20</td>
                  <td>100</td>
                  <td>$500</td>
                  <td>
                    #10010
                    <div className="InvoicePdfWrpapper">
                      <a href>
                        <img
                          src="assets/frontend/images/InvoiceAndPayment/InvoicePdfDownloadButton.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </td>
                  <td className="InvoicePaidColor">Paid</td>
                  <td />
                </tr>
                {/* Paid Table End */}
                {/* Paid Table Start */}
                <tr className="InvoiceTableItemsWhite">
                  <th scope="row" className="InvoiceTableHeadingGreenColor">
                    <div className="weekDateWrapper">
                      <span>Sat, 2 Jan, 23</span>
                      <span>-</span>
                      <span>Mon, 8 Jan, 23</span>
                    </div>
                  </th>
                  <td>20</td>
                  <td>100</td>
                  <td>$500</td>
                  <td>
                    #10010
                    <div className="InvoicePdfWrpapper">
                      <a href>
                        <img
                          src="assets/frontend/images/InvoiceAndPayment/InvoicePdfDownloadButton.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </td>
                  <td className="InvoicePaidColor">Paid</td>
                  <td />
                </tr>
                {/* Paid Table End */}
                {/* Due Table Start */}
                <tr className="InvoiceTableItemsRed">
                  <th scope="row" className="InvoiceTableHeadingRedColor">
                    <div className="weekDateWrapper">
                      <span>Sat, 2 Jan, 23</span>
                      <span>-</span>
                      <span>Mon, 8 Jan, 23</span>
                    </div>
                  </th>
                  <td>20</td>
                  <td>100</td>
                  <td>$500</td>
                  <td>
                    #10010
                    <div className="InvoicePdfWrpapper">
                      <a href>
                        <img
                          src="assets/frontend/images/InvoiceAndPayment/InvoicePdfDownloadButton.png"
                          className="img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </td>
                  <td className="InvoiceDueColor">Due</td>
                  <td>
                    <button className="InvoicePayButton">Pay</button>
                  </td>
                </tr>
                {/* Due Table End */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Invoice and Payment Table End */}
    </div>
  );
}

export default PaymentInvoice;
