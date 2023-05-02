import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

import Banner from "./Banner";
import Services from "./Services";
import Position from "./Position";
import FindJobs from "./FindJobs";
import DownloadApp from "./DownloadApp";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <Position />
      <FindJobs />
      <DownloadApp />
      <Testimonial />
      <Contact />

      <CookieConsent
        location="bottom"
        buttonText="Allow Cookies!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#c6a34f" }}
        buttonStyle={{ color: "#ffffff", fontSize: "16px" }}
        expires={150}
      >
        “This website collects cookies to deliver better user experience” “We
        collect cookies to analyze our website traffic and performance; we never
        collect any personal data” “Cookies help us display personalized product
        recommendations and ensure you have great shopping experience”
        {/* <span style={{ fontSize: "14px" }}>
          This bit of text is smaller :O
        </span> */}
      </CookieConsent>
    </div>
  );
}

export default Home;
