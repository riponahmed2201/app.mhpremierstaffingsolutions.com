import React from "react";

function MyEmployee() {
  return (
    <div>
      {/* Inner Dashboard Search Part Start */}
      <section className="InnnerDashboardSearch">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="innerDashSearchItems d-flex align-items-center">
                <button className="innerdashboardBackButton">
                  <img
                    src="assets/frontend/images/InnerDashboard/arrow.png"
                    className="img-fluid"
                    alt="image"
                  />
                </button>
                <img
                  src="assets/frontend/images/InnerDashboard/mapSearch.png"
                  className="img-fluid"
                  alt="image"
                />
                <span className="innerDashSearchItemsSpan">Dashboard</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="innerDashboardRightSideFormWrapper d-flex align-items-center">
                <div className="InnerDashSearchCion">
                  <img
                    src="assets/frontend/images/InnerDashboard/SearchIcon.png"
                    alt="image"
                  />
                </div>
                <input
                  type="text"
                  className="form-control innerDashRightSideSearchBar"
                  placeholder="search here"
                  aria-label="First name"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Dashboard Search Part End */}
      {/* InnerDashboardTable Start */}
      <section className="InnnerDashboardTable">
        <div className="container">
          <div className="row">
            <table className="table">
              {/* Table  Start */}
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="InnerTableHeadingGlobalStyle InnerTableHeadingGlobalStyleFirstChild"
                  >
                    Employee
                  </th>
                  <th scope="col" className="InnerTableHeadingGlobalStyle">
                    Check In
                  </th>
                  <th scope="col" className="InnerTableHeadingGlobalStyle">
                    Check Out
                  </th>
                  <th scope="col" className="InnerTableHeadingGlobalStyle">
                    Break time
                  </th>
                  <th scope="col" className="InnerTableHeadingGlobalStyle">
                    Total hours
                  </th>
                  <th scope="col" className="InnerTableHeadingGlobalStyle">
                    Total Amount
                  </th>
                  <th scope="col" className="InnerTableHeadingGlobalStyle">
                    Chat
                  </th>
                  <th
                    scope="col"
                    className="InnerTableHeadingGlobalStylelastChild InnerTableHeadingGlobalStyle"
                  >
                    More
                  </th>
                </tr>
                <tr>
                  <td className="InnerTableDateShow">
                    <span>Sun, 11 Jan , 2023</span>
                  </td>
                </tr>
              </thead>
              {/* Table body 1 */}
              <tbody style={{ textAlign: "center" }}>
                <tr>
                  <th scope="row">
                    <div
                      className="row"
                      style={{ textAlign: "start !important" }}
                    >
                      <div className="col-lg-3">
                        <div className="InnerDashTableEmployee">
                          <img
                            src="assets/frontend/images/InnerDashboard/TableProfilePic.png"
                            className="img-fluid"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <span className="InnerTableEmployeeName">
                          John Smith Mcculumn
                        </span>
                        <p className="InnerTableEmployeeDesignation">Manager</p>
                      </div>
                    </div>
                  </th>
                  <td className="InnerTablebodyItemPaddingTopFix">9:00</td>
                  <td className="InnerTablebodyItemPaddingTopFix">12:00</td>
                  <td className="InnerTablebodyItemPaddingTopFix">30 min</td>
                  <td className="InnerTablebodyItemPaddingTopFix">2.5 Hours</td>
                  <td className="InnerTablebodyItemPaddingTopFix">$45.00</td>
                  <td className="InnerTablebodyItemPaddingTopFix">
                    <button className="TableChatIcon">
                      <img
                        src="assets/frontend/images/InnerDashboard/tableChatIcon.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </button>
                  </td>
                  <td className="text-center">
                    <div className="btn-group  InnerDashTableSelectDselectWrap">
                      <button type="button" className="btn  ">
                        <img
                          className="InnerDashboardMoreSelectBtnImg"
                          src="assets/frontend/images/InnerDashboard/select.png"
                          alt="image"
                        />
                      </button>
                      <img
                        src="assets/frontend/images/InnerDashboard/InnerBTNLine.png"
                        className="InnerDashLineImageBtn"
                        alt="image"
                      />
                      <button type="button" className="btn ">
                        <img
                          className="InnerDashboardMoreDeselectBtnImg"
                          src="assets/frontend/images/InnerDashboard/Union.png"
                          alt="image"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Table body 2 */}
                <tr>
                  <th scope="row">
                    <div
                      className="row"
                      style={{ textAlign: "start !important" }}
                    >
                      <div className="col-lg-3">
                        <div className="InnerDashTableEmployee">
                          <img
                            src="assets/frontend/images/InnerDashboard/TableProfilePic.png"
                            className="img-fluid"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <span className="InnerTableEmployeeName">
                          John Smith Mcculumn
                        </span>
                        <p className="InnerTableEmployeeDesignation">Manager</p>
                      </div>
                    </div>
                  </th>
                  <td className="InnerTablebodyItemPaddingTopFix">9:00</td>
                  <td className="InnerTablebodyItemPaddingTopFix">12:00</td>
                  <td className="InnerTablebodyItemPaddingTopFix">30 min</td>
                  <td className="InnerTablebodyItemPaddingTopFix">2.5 Hours</td>
                  <td className="InnerTablebodyItemPaddingTopFix">$45.00</td>
                  <td className="InnerTablebodyItemPaddingTopFix">
                    <button className="TableChatIcon">
                      <img
                        src="assets/frontend/images/InnerDashboard/tableChatIcon.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </button>
                  </td>
                  <td className="text-center">
                    <div className="btn-group  InnerDashTableSelectDselectWrap">
                      <button type="button" className="btn ">
                        <img
                          src="assets/frontend/images/InnerDashboard/select.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </button>
                      <img
                        src="assets/frontend/images/InnerDashboard/InnerBTNLine.png"
                        className="InnerDashLineImageBtn"
                        alt="image"
                      />
                      <button type="button" className="btn ">
                        <img
                          src="assets/frontend/images/InnerDashboard/Union.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Table body 3 */}
                <tr>
                  <th scope="row">
                    <div
                      className="row"
                      style={{ textAlign: "start !important" }}
                    >
                      <div className="col-lg-3">
                        <div className="InnerDashTableEmployee">
                          <img
                            src="assets/frontend/images/InnerDashboard/TableProfilePic.png"
                            className="img-fluid"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <span className="InnerTableEmployeeName">
                          John Smith Mcculumn
                        </span>
                        <p className="InnerTableEmployeeDesignation">Manager</p>
                      </div>
                    </div>
                  </th>
                  <td className="InnerTablebodyItemPaddingTopFix">9:00</td>
                  <td className="InnerTablebodyItemPaddingTopFix">12:00</td>
                  <td className="InnerTablebodyItemPaddingTopFix">30 min</td>
                  <td className="InnerTablebodyItemPaddingTopFix">2.5 Hours</td>
                  <td className="InnerTablebodyItemPaddingTopFix">$45.00</td>
                  <td className="InnerTablebodyItemPaddingTopFix">
                    <button className="TableChatIcon">
                      <img
                        src="assets/frontend/images/InnerDashboard/tableChatIcon.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </button>
                  </td>
                  <td className="text-center">
                    <div className="btn-group  InnerDashTableSelectDselectWrap">
                      <button type="button" className="btn ">
                        <img
                          src="assets/frontend/images/InnerDashboard/select.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </button>
                      <img
                        src="assets/frontend/images/InnerDashboard/InnerBTNLine.png"
                        className="InnerDashLineImageBtn"
                        alt="image"
                      />
                      <button type="button" className="btn ">
                        <img
                          src="assets/frontend/images/InnerDashboard/Union.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* InnerDashboard End */}
    </div>
  );
}

export default MyEmployee;
