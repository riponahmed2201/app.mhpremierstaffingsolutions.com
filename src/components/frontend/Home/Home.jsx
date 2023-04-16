import React from "react";

import Banner from "./Banner";
import Services from "./Services";
import Position from "./Position";
import FindJobs from "./FindJobs";
import DownloadApp from "./DownloadApp";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Banner />

      {/* Start Our services */}
      <Services />
      <Position />
      {/* End Our services */}

      <FindJobs />
      <DownloadApp />
      <Contact />
    </div>
  );
}

export default Home;
