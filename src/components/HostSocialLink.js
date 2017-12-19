import React from "react";
import PropTypes from "prop-types";

const HostSocialLink = ({ data }) => {
  const podcastList = {
    hostInstagram: "instagram",
    hostTwitter: "twitter",
    hostGithub: "github",
  };

  return (
    <ul className="list-inline host-social-links">
      {Object.keys(podcastList).map(key => (
        <li key={key}>
          <a href={data[key]}>
            <i className={`fa fa-${podcastList[key]}`} aria-hidden="true" />
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
