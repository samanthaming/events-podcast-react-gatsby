import React from "react";
import PropTypes from "prop-types";

const HostSocialLink = ({ data }) => {
  const podcastList = {
    hostInstagram: "instagram",
    hostTwitter: "twitter",
  };

  return (
    <ul className="list-inline host-social-links">
      {Object.entries(podcastList).map(([key, value]) => (
        <li key={key}>
          <a href={data[key]}>
            <i className={`fa fa-${value}`} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
};

HostSocialLink.propTypes = {
  data: PropTypes.object.isRequired
};

export default HostSocialLink;
