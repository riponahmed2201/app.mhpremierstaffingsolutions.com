import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtTokenDecode } from "../../../utils/jwtDecode";
import { token } from "../../../utils/authentication";
import axios from "axios";

function CheckInCheckOut() {
  // https://server.mhpremierstaffingsolutions.com/api/v1/check-in-check-out-histories?filterDate=2023-05-22&clientId=642d066dcec196373a33360a
  // filterDate=2023-05-22 current Date
  // clientId=642d066dcec196373a33360a  jai client loggedin korche shai client ar id

  // current-hired-employees/update-status  //for complain

  const jwtDecode = jwtTokenDecode();

  const [getEmployee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();

  //Set filter data
  const [getName, setName] = useState(undefined);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);

    try {
      const responseData = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/check-in-check-out-histories?clientId=${jwtDecode._id}` +
          (getName ? `&searchKeyword=${getName}` : ``),
        {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        }
      );
console.log("responseData: ", responseData);
      if (responseData && responseData?.data.statusCode == 200) {
        setEmployee(responseData?.data);
        setLoading(false);
      } else if (responseData && responseData?.data.statusCode == 400) {
        setError(responseData.errors);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(true);
      console.log(error);
    }
  }, [getName]);

  useEffect(() => {
    fetchEmployees();
  }, []);

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
                      src="assets/frontend/images/InnerDashboard/arrow.png"
                      className="img-fluid"
                      alt="arrow"
                    />
                  </button>
                </Link>
                <img
                  src="assets/frontend/images/InnerDashboard/mapSearch.png"
                  className="img-fluid"
                  alt="mapSearch"
                />
                <span className="innerDashSearchItemsSpan">Dashboard</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="innerDashboardRightSideFormWrapper d-flex align-items-center">
                <div className="InnerDashSearchCion">
                  <img
                    src="assets/frontend/images/InnerDashboard/SearchIcon.png"
                    alt="SearchIcon"
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

      <section className="InnnerDashboardTable">
        <div className="container">
          <div className="row">
            <table className="table">
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
                  <th
                    scope="col"
                    className="InnerTableHeadingGlobalStylelastChild InnerTableHeadingGlobalStyle"
                  >
                    Complain
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
                            alt="TableProfilePic"
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
                  <td className="InnerTablebodyItemPaddingTopFix">£45.00</td>
                  <td className="text-center">
                    <div className="btn-group  InnerDashTableSelectDselectWrap">
                      <button type="button" className="btn  ">
                        <img
                          className="InnerDashboardMoreSelectBtnImg"
                          src="assets/frontend/images/InnerDashboard/select.png"
                          alt="select"
                        />
                      </button>
                      <img
                        src="assets/frontend/images/InnerDashboard/InnerBTNLine.png"
                        className="InnerDashLineImageBtn"
                        alt="InnerBTNLine"
                      />
                      <button type="button" className="btn ">
                        <img
                          className="InnerDashboardMoreDeselectBtnImg"
                          src="assets/frontend/images/InnerDashboard/Union.png"
                          alt="Union"
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

export default CheckInCheckOut;
