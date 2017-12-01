import React from "react";
import PropTypes from "prop-types";
import PodcastLink from "../components/PodcastLink";

const Footer = ({ data }) => (
  <div className="footer">
    <div className="footer-copyright">
      &copy; { new Date().getFullYear() } Events Podcast, All Rights Reserved
    </div>
    <div>
      Built &amp; Designed by&nbsp;
      <a href="https://www.linkedin.com/in/samanthaming/">
        Samantha Ming
      </a>
    </div>
    <div className="footer-links">
      <PodcastLink data={data} />
    </div>
  </div>
);

Footer.propTypes = {
  data: PropTypes.object.isRequired
};

export default Footer;
