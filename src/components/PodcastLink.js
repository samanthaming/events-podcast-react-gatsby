import React from "react";
import PropTypes from "prop-types";

const PodcastLink = ({ data }) => {
  const podcastList = {
    rss: "rss",
    stitcher: "podcast",
    googlePlay: "google",
    soundcloud: "soundcloud",
    itunes: "apple"
  };

  return (
    <ul className="list-inline podcast-links">
      {Object.keys(podcastList).map((key) => (
        <li key={key}>
          <a href={data[key]}>
            <i className={`fa fa-${podcastList[key]}`} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
};

PodcastLink.propTypes = {
  data: PropTypes.object.isRequired
};

export default PodcastLink;
