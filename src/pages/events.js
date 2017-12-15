import React from 'react';
import PropTypes from "prop-types";
import EventSchedule from '../components/EventSchedule';

const Events = (props) => {
  const {node: data} = props.data.allMarkdownRemark.edges[0];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <EventSchedule html={data.html} type={`new`} title={data.frontmatter.title} />
        </div>
      </div>
    </div>
  );
}

export const eventsQuery = graphql`
query EventsQuery {
  site {
    siteMetadata {
      title
      site {
        twitter
        facebook
        instagram
        rss
        itunes
        googlePlay
        soundcloud
        siteDescription
      }
    }
  }
  allMarkdownRemark(
    filter: {frontmatter: {category: {eq: "event"}}}
    sort: {fields: [frontmatter___date], order: DESC}
    limit: 1
  ) {
    edges {
      node {
        id
        html
        frontmatter {
          title
          path
          description
          time
          episode
          artwork
          soundcloud
          parent
          date
          category
        }
      }
    }
  }
}
`;

export default Events;
