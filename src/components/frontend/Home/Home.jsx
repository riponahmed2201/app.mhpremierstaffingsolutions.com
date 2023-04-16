import React from "react";

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
    </div>
  );
}

export default Home;
