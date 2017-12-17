import React from 'react';
import PropTypes from "prop-types";

const PreviousEvents = (props) => {
  const {events} = props;
  return (
    <div>
      <div className="container">
        <hr className="section-hr"/>
      </div>

      <div className="container">
        <h3 className="section-title">Previous Events</h3>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="event-list">
              {
                events.map(({node}) => (
                  <li key={node.id}>
                    <a href={node.frontmatter.path}>
                      {node.frontmatter.title}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

PreviousEvents.propTypes = {
  events: PropTypes.array.isRequired,
};

export default PreviousEvents;
