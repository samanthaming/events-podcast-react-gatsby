import React from 'react';
import PropTypes from "prop-types";
import PodcastLink from './PodcastLink';
import logo from '../images/cover-events-podcast.png';

const AboutPodcast = (props) => {
  const {site} = props;

  return (
    <div className="about-block">
      <div className="about-info">
        <h1 className="title">About Events Podcast</h1>
        <hr />
        <p>{site.siteDescription}</p>
      </div>
      <div className="about-media">
        <img src={logo} alt="Events Podcast Logo" />
        <div className="about-links">
          <PodcastLink data={site} />
        </div>
      </div>
    </div>
  );
}

AboutPodcast.propTypes = {
  site: PropTypes.object.isRequired
};

export default AboutPodcast;
