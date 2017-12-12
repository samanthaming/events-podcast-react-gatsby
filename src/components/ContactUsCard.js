import React from 'react';
import PropTypes from "prop-types";

const ContactUsCard = ({email}) => (
  <div className="well well-contact well-card">
    <h5 className="title">Contact Us</h5>

    <div className="well-button">
      <a href={`mailto:${email}`}>
        <i className="fa fa-envelope" aria-hidden="true"/>
      </a>
    </div>

  </div>
);

ContactUsCard.propTypes = {
  email: PropTypes.string.isRequired
};

export default ContactUsCard;
