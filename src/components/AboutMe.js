import React from "react";
import PropTypes from "prop-types";
import HostSocialLink from '../components/HostSocialLink';
import logo from '../images/host-samantha-ming.jpg';

const AboutMe = (props) => {
  const {site} = props;

  return (
    <div className="about-block">
      <div className="about-info">
        <h2 className="title">About Me</h2>
        <hr />
        <p>Samantha is the creator and host of the Events Podcast. Her 5 favourite
          podcasts are&nbsp;
          <a href="http://www.cbc.ca/radio/undertheinfluence">Under The Influence</a>,&nbsp;
          <a href="https://gimletmedia.com/science-vs/">Science Vs</a>,&nbsp;
          <a href="http://www.npr.org/podcasts/510289/planet-money">Planet Money</a>,&nbsp;
          <a href="http://www.npr.org/podcasts/510313/how-i-built-this">How I Built This</a>, and the&nbsp;
          <a href="https://www.garyvaynerchuk.com/podcast/">GaryVee Audio Experience</a>.
          Beside being a podcaster, she is a Front-End Web Developer who loves all things
          tech.
        </p>
      </div>
      <div className="about-media">
        <img src={logo} alt="Samantha Ming" />
        <div className="about-bio">
          <div className="about-bio-name">Samantha Ming</div>
          <div className="about-bio-title">Founder and Host</div>
        </div>
        <div className="about-links">
          <HostSocialLink data={site} />
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  site: PropTypes.object.isRequired
};

export default AboutMe;
