import React from 'react';
import PropTypes from "prop-types";

const EventSchedule = (props) => {
  const {html, type, title} = props;
  return (
    <div className={`events-schedule ${type}-event`}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{title}</h3>
        </div>
        <div className="panel-body">
          <div className="event-heading">
            <h1 className="event-title">Vancouver Tech Events</h1>
            <h2 className="event-duration">{title}</h2>
          </div>

          <div className="event-info" dangerouslySetInnerHTML={{ __html: html }} />

          <div className="event-disclaimer">
            <em>Note: Organizers may change their event details, so please check their official site for the most updated information.</em>
          </div>
        </div>
      </div>
    </div>
  );
}

EventSchedule.defaultProps = {
  type: 'old',
};

EventSchedule.propTypes = {
  html: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default EventSchedule;
