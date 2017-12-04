import React from 'react';
import PropTypes from "prop-types";
import PodcastLink from "./PodcastLink";

const Jumbotron = (props) => (
  <div className="jumbotron podcast-banner">
    <div className="container">
      <h1 className="jumbotron-title logo">
        <a href="/" className="text-uppercase">Events Podcast</a>
      </h1>

      <p>{ props.data.siteDescription }</p>

      <PodcastLink data={props.data} />
    </div>
  </div>
);

Jumbotron.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Jumbotron;
