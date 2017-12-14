import React from "react";
import GatsbyLink from "gatsby-link";
import PropTypes from "prop-types";

const Episode = props => {
  const { description, soundcloud, path, title } = props;
  const soundcloudUrl = `https%3A//api.soundcloud.com/tracks/${soundcloud}&amp`;
  const soundcloudSrc = `https://w.soundcloud.com/player/?url=${
    soundcloudUrl
  };color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false`;
  return (
    <div className="col-lg-6">
      <div className="well well-sm">
        <iframe
          title={title}
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          src={soundcloudSrc}
        />
        <p>
          {description}&nbsp;
          <GatsbyLink to={path}>View show notes</GatsbyLink>
        </p>
      </div>
    </div>
  );
};

Episode.propTypes = {
  description: PropTypes.string.isRequired,
  soundcloud: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Episode;
