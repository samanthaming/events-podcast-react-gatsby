import React from 'react';
import PropTypes from "prop-types";
import PodcastLink from '../components/PodcastLink';

const PodcastCard = (props) => {
  const {title, description, data} = props;
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="panel-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <PodcastLink data={data} />
        </div>
      </div>
    </div>
  );
}

PodcastCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default PodcastCard;
