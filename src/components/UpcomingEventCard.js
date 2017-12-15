import React from 'react';
import PropTypes from "prop-types";

const UpcomingEventCard = (props) => {
  const {email, domain} = props;

  return (
    <div className="well well-loud-secondary well-callout">
      <h4 className="well-title text-uppercase">Got an Upcoming Event?</h4>
      <p>
        <a
          href={`mailto:${email}?Subject=Event suggestion for ${domain}`}
          target="_top"
        >
          Email us
        </a>
        &nbsp;to include your event on our next schedule. If you&apos;re an event organizer and
        would like to be featured on the show, definitely email us&nbsp;
        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
      </p>
    </div>
  );
}

UpcomingEventCard.propTypes = {
  email: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
};

export default UpcomingEventCard;
