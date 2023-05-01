import React from "react";

const TermsOfUse = () => {
  return (
    <div>
      <div
        className="banner-header section-padding valign bg-img bg-fixed img-fluid"
        style={{
          backgroundImage: `url('https://i.ibb.co/Ln4H0SZ/term.jpg')`,
          minHeight: "400px",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-12  caption align-middle"
              style={{ marginTop: "150px" }}
            >
              <h1 style={{ color: "white", fontSize: "70px" }}>TERMS OF USE</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container " style={{ marginTop: "150px" }}>
        <h1 className="mt-5">MH</h1>
        <p style={{ fontSize: "20px" }} className="my-3">
          MH PREMIER STAFFING SOLUTIONS
        </p>
        <strong style={{ fontSize: "15px" }} className="my-5">
          Internal standards and conditions for Clients:
        </strong>
        <p className="mt-4" style={{ fontSize: "18px", marginBottom: "200px" }}>
          Our website is for personal, non-commercial use only. No illegal or
          unauthorized use allowed. All website content is our property and
          protected by copyright laws. No reproduction or modification without
          our consent. Use our website in a manner that does not interfere with
          its normal operation or infringe on others' rights. No harassment,
          defamation, or impersonation allowed. We are not responsible for any
          third-party website content or privacy practices. We provide no
          warranties and will not be liable for any damages arising from the use
          of our website. These terms of use are governed by the laws of London,
          UK. Any disputes must be resolved in the state or federal courts
          located in 48 Warwick St Regent Street W1B 5AW London. If you have
          questions, contact us info@mhpremierstaffingsolutions.com
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
