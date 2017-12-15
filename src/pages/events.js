import React from 'react';
import PropTypes from "prop-types";
import EventSchedule from '../components/EventSchedule';
import PodcastCard from '../components/PodcastCard';
import UpcomingEventCard from '../components/UpcomingEventCard';

const Events = (props) => {
  const {allMarkdownRemark, site} = props.data;
  const {node: markdown} = allMarkdownRemark.edges[0];
  const {title, email, domain, site: data} = site.siteMetadata;

  return (
    <div className="container" style={{marginTop: '38px'}}>
      <div className="row">
        <div className="col-lg-8">
          <EventSchedule html={markdown.html} type={`new`} title={markdown.frontmatter.title} />
        </div>
        <div className="col-lg-4 events-aside">
          <PodcastCard title={title} data={data} description={data.siteDescription} />
          <UpcomingEventCard email={email} domain={domain} />
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
      email
      domain
      site {
        rss
        stitcher
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
          date
          category
        }
      }
    }
  }
}
`;

Events.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Events;
