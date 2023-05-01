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
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
    </div>
  );
}

export default Home;
