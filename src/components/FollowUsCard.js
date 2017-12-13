import React from 'react';
import PropTypes from 'prop-types';
import SocialLink from './SocialLink';

const FollowUsCard = (props) => (
  <div className="well well-social well-card">
    <h5 className="title">Follow us</h5>
    <div className="well-links">
      <SocialLink social={props.social}/>
    </div>
  </div>
);

FollowUsCard.propTypes = {
  social: PropTypes.object.isRequired
};

export default FollowUsCard;
